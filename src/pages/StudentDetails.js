import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { deleteStudent } from '../actions/student_actions'
import Header from '../containers/HeaderContainer'
import StudentDetailsContainer from '../containers/StudentDetailsContainer'

class StudentDetails extends Component {

  onDeleteClick() {
    this.props.deleteStudent(this.props.params.id)
      .then(() => { this.context.router.push('/'); })
  }

  render() {
    return (
      <div>
        <Header type="student_details" />
        <StudentDetailsContainer id={this.props.match.params.id}/>
      </div>
    );
  }
}

export default StudentDetails;