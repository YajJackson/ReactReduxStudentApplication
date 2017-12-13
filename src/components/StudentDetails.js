import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card, { CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

class StudentDetails extends Component {
  componentWillUnmount() {
     this.props.resetMe();
  }

  componentDidMount() {
    this.props.fetchStudent(this.props.studentId);
  }

  render() {
    const { student, loading, error } = this.props.activeStudent;
    if (loading) {
      return <div className="container">Loading...</div>;
    } else if(error) {
      return  <div className="alert alert-danger">{error.message}</div>
    } else if(!student) {
      return <span />
    }
    
    return (
      <Grid container spacing={24}>
        <Grid item xs={12} sm={4}>
          <Card style={{marginLeft: '5vw', marginTop: 10}}>
            <CardMedia
              style={{ height: 300}}
              image={this.props.activeStudent.student._ProfileImage}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} style={{paddingLeft: '5vw', paddingRight: '5vw'}}>
          <Paper style={{ paddingTop: 16, paddingBottom: 16, paddingLeft: 10, marginTop: 10 }} elevation={2}>
            <Typography type="headline" component="h3">
            {this.props.activeStudent.student._FirstName}
          </Typography>
          </Paper>
          <Paper style={{ paddingTop: 16, paddingBottom: 16, paddingLeft: 10, marginTop: 10 }} elevation={2}>
            <Typography type="headline" component="h3">
            {this.props.activeStudent.student._LastName}
          </Typography>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default StudentDetails;