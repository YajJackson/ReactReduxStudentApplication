import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { createStudent, createStudentSuccess, createStudentFailure, resetNewStudent } from '../actions/student_actions'
import {EnvironmentConstants} from '../gobals'
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

//Client side validation
function validate(values) {
  const errors = {}
  console.log('inside validate', values)
  if (!values.title || values.title.trim() === '') {
    errors.title = 'Enter a Title';
  }
  if (!values.categories || values.categories.trim() === '') {
    errors.categories = 'Enter categories';
  }
  if (!values.content || values.content.trim() === '') {
    errors.content = 'Enter some content';
  }
  return errors;
}

class StudentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputStudent: {
        FirstName: null,
        LastName: null,
        ProfileImage: null
      }
    }
  }

  componentDidMount() {
    this.props.resetMe();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newStudent.student && !nextProps.newStudent.error) {
      window.location.replace(EnvironmentConstants.RootUrl)
    }
  }

  handleChange = (e) => {
    let stateClone = {...this.state.inputStudent}
    switch(e.target.placeholder){
      case 'First':
        stateClone.FirstName = e.target.value
        this.setState({
          inputStudent: {...stateClone}
        })
        return
      case 'Last':
        stateClone.LastName = e.target.value
        this.setState({
          inputStudent: {...stateClone}
        })
        return
      case 'Image':
        stateClone.ProfileImage = e.target.value
        this.setState({
          inputStudent: {...stateClone}
        })
        return
      default:
        return
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onCreateClick(this.state.inputStudent)
  }
  render() {
    const {submitting, newStudent} = this.props;

    return (
      <div style={{flexGrow: 1, marginTop: 30}}>
        <form onSubmit={this.handleSubmit}>
          <Grid container spacing={24}>
            <Grid item xs={3}></Grid>

            <Grid container xs={6}>
              <Grid item xs={6}>
                <Input
                  onChange={this.handleChange}
                  placeholder="First"
                  style={{ marginTop: '10px', width: '100%'}}
                />
              </Grid>
              <Grid item xs={6}>
                <Input
                  onChange={this.handleChange}
                  placeholder="Last"
                  style={{ marginTop: '10px', width: '100%'}}
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  onChange={this.handleChange}
                  placeholder="Image"
                  style={{ marginTop: '10px', width: '100%' }}
                />
              </Grid>
              <Grid item xs={12} style={{marginLeft:0}}>
                <Button raised color='primary' type='submit' style={{ width: '100%', marginLeft: '0' }}>
                  Create
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    )
  }
}


export default StudentForm