import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/student_actions';
import Header from '../containers/HeaderContainer.js';
// import StudentDetailsContainer from '../containers/StudentDetailsContainer.js';

class StudentDetails extends Component {

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
      .then(() => { this.context.router.push('/'); });
  }

  render() {
    console.log('Inside StudentDetails Page', this.props)
    return (
      <div>
        <Header type="student_details" />
        {/* <PostDetailsContainer id={this.props.params.id}/> */}
      </div>
    );
  }
}

export default StudentDetails;