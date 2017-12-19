import StudentDetails from '../components/StudentDetails.js'
import {  fetchStudent, 
          fetchStudentSuccess, 
          fetchStudentFailure, 
          resetActiveStudent, 
          resetDeletedStudent } from '../actions/student_actions'
import { connect } from 'react-redux'

const mapStateToProps = (globalState, ownProps) => {
  return {
    activeStudent: globalState.students.activeStudent,
    studentId: ownProps.id,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStudent: (id) => {
      dispatch(fetchStudent(id))
      .then(
        (result) => result.payload.response && result.payload.response.status !== 200 ?
          dispatch(fetchStudentFailure(result.payload.response.data)) :
          dispatch(fetchStudentSuccess(result.payload.data))
      )
    },

    resetMe: () => {
      dispatch(resetActiveStudent())
      dispatch(resetDeletedStudent())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails)