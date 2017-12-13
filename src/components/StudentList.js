import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import List from 'material-ui/List'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import StudentListItem from './StudentListItem'

class StudentList extends Component {
  componentWillMount() {
    this.props.fetchStudents()
  }

  renderStudents(students) {
    if (students[0]){
      return students.map((student) => {
        return (
          <StudentListItem 
            student={student}
          />
        )
      })
      return (
        <li></li>
      )
    }
  }

  render() {
    const { students, loading, error } = this.props.studentsList;

    if(loading) {
      return <div><h1>students</h1><h3>Loading...</h3></div>      
    } else if(error) {
      return <div>Error: {error.message}</div>
    }

    return (
      <div style={{flexGrow: 1, marginTop: 30}}>
        <Grid container spacing={24}>
          <Grid item xs={3}></Grid>
          <Grid item xs={12} md={6}>
            {this.renderStudents(this.props.studentsList.students)}
          </Grid>
        </Grid>
      </div>
    );
  }
}


export default StudentList