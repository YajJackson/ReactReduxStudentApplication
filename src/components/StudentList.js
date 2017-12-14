import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import List from 'material-ui/List'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import { LinearProgress } from 'material-ui/Progress';
import StudentListItem from './StudentListItem'

class StudentList extends Component {
  componentWillMount() {
    this.props.fetchStudents()
  }

  renderStudents(students) {
    if (students[0]){
      return students.map((student, i) => {
        return (
          <StudentListItem
            key={student._Id}
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
      return (
        <div style={{width:'100%', marginTop:'25%'}}>
          <LinearProgress mode="query" style={{marginLeft:'15%', marginRight:'15%'}} />
        </div>
      )     
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