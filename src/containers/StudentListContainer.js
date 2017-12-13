import { connect } from 'react-redux'
import { fetchStudents, fetchStudentsSuccess, fetchStudentsFailure } from '../actions/student_actions'
import StudentList from '../components/StudentList'


const mapStateToProps = (state) => {
  return { 
    studentsList: state.students.studentsList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStudents: () => {
      dispatch(fetchStudents())
      .then((response) => {
              !response.error ? 
                dispatch(fetchStudentsSuccess(response.payload.data)) : 
                dispatch(fetchStudentsFailure(response.payload.data))
            })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);