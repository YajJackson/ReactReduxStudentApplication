import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import StudentFormContainer from '../containers/StudentFormContainer';

class StudentNew extends Component {
  render() {
    return (
      <div>
        <HeaderContainer type="student_update"/>
        <StudentFormContainer />
      </div>
    );
  }
}

export default StudentNew;