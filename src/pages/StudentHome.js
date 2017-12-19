import React, { Component } from 'react'
import HeaderContainer from '../containers/HeaderContainer'
import StudentList from '../containers/StudentListContainer'

class StudentHome extends Component {
  render() {
    return (
      <div>
        <HeaderContainer type="student_home"/>
        <StudentList />
      </div>
    )
  }
}

export default StudentHome