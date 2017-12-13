import StudentForm from '../components/StudentForm.js'
import { createStudent, createStudentSuccess, createStudentFailure, resetNewStudent } from '../actions/student_actions'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    resetMe: () => {
      dispatch(resetNewStudent())
    },
    onCreateClick: (student) => {
      dispatch(createStudent(student))
        .then(result => {
          if (result.payload.response && result.payload.response.status !== 200) {
            dispatch(createStudentFailure(result.payload.response.data))
            throw new SubmissionError(result.payload.response.data)
          }
          dispatch(createStudentSuccess(result.payload.data))
        });
    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    newStudent: state.students.newStudent
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm)