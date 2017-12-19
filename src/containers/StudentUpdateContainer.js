import StudentUpdate from '../components/StudentUpdate.js'
import { updateStudent, updateStudentSuccess, resetNewStudent } from '../actions/student_actions'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  return {
    activeStudent: state.students.activeStudent,
    updatedStudent: state.students.updatedStudent
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdateClick: (student, id) => {
      dispatch(updateStudent(student, id))
      .then(result => dispatch(updateStudentSuccess(result.payload.data)))
    },

    resetMe: () => dispatch(resetNewStudent())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentUpdate)