import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer.js';

class PostsIndex extends Component {
  render() {
    console.log("Student Index Page Working")
    return (
      <div>
        <HeaderContainer type="student_index"/>
        {/* <StudentsList /> */}
      </div>
    );
  }
}

export default PostsIndex;