import StudentUpdate from '../components/StudentUpdate.js'
import { updateStudent, updateStudentSuccess, resetNewStudent } from '../actions/student_actions'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    resetMe: () => {
      dispatch(resetNewStudent())
    },

    onUpdateClick: (student) => {
      dispatch(updateStudent(studentd))
        .then(result => {
          dispatch(updateStudentSuccess(result.payload.data))
        })
    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    newStudent: state.students.newStudent
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm)