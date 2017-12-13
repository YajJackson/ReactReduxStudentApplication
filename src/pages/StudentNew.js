import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
// import StudentFormContainer from '../containers/PostFormContainer';

class StudentNew extends Component {
  render() {
    return (
      <div>
        <HeaderContainer type="student_new"/>
        {/* <StudentFormContainer /> */}
      </div>
    );
  }
}

export default StudentNew;