import StudentUpdate from '../components/StudentUpdate.js'
import { updateStudent, updateStudentSuccess, resetNewStudent } from '../actions/student_actions'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    resetMe: () => {
      dispatch(resetNewStudent())
    },

    onUpdateClick: (student, id) => {
      dispatch(updateStudent(student, id))
        .then(result => dispatch(updateStudentSuccess(result.payload.data)))
    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    activeStudent: state.students.activeStudent,
    updatedStudent: state.students.updatedStudent
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentUpdate)