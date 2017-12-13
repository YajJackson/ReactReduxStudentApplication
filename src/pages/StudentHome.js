import React, { Component } from 'react'
import HeaderContainer from '../containers/HeaderContainer'
import StudentList from '../containers/StudentListContainer'

class StudentHome extends Component {
  render() {
    console.log("Inside StudentHome Page")
    return (
      <div>
        <HeaderContainer type="student_home"/>
        {/* <StudentsList /> */}
      </div>
    );
  }
}

export default StudentHome;