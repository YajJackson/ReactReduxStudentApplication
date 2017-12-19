import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  fetchStudents, 
          resetDeletedStudent, 
          deleteStudent, 
          deleteStudentSuccess, 
          deleteStudentFailure,
          updateStudent,
          updateStudentSuccess } from '../actions/student_actions'
import Header from '../components/Header'

const mapStateToProps = (state) => {
  return { 
    deletedStudent: state.students.deletedStudent,
    updatedStudent: state.students.updatedStudent
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDeleteClick: () => {
      dispatch(deleteStudent(parseInt(window.location.href.split('/').splice(-1)[0])))
      .then(
        (response) => !response.error ? 
          dispatch(deleteStudentSuccess(response.payload)) : 
          dispatch(deleteStudentFailure(response.payload))
      )
    },

    resetMe: () => dispatch(resetDeletedStudent())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);