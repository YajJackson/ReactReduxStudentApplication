import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import StudentUpdateContainer from '../containers/StudentUpdateContainer';

class StudentUpdate extends Component {

  render() {
    return (
      <div>
        <HeaderContainer type="student_update"/>
        <StudentUpdateContainer id={this.props.match.params.id}/>
      </div>
    )
  }
}

export default StudentUpdate;