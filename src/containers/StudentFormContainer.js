import StudentForm from '../components/StudentForm.js'
import {  createStudent, 
          createStudentSuccess, 
          createStudentFailure, 
          resetNewStudent } from '../actions/student_actions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    newStudent: state.students.newStudent
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCreateClick: (student) => {
      dispatch(createStudent(student))
      .then(
        (result) => result.payload.response && result.payload.response.status !== 200 ?
          dispatch(createStudentFailure(result.payload.response.data)) :
          dispatch(createStudentSuccess(result.payload.data))
      )
    },

    resetMe: () => dispatch(resetNewStudent())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(StudentForm)