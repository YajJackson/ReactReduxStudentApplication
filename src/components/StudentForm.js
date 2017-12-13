import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { createStudent, createStudentSuccess, createStudentFailure, resetNewStudent } from '../actions/student_actions'
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import {EnvironmentConstants} from '../gobals'

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
      window.location.replace(EnvironmentConstants.RootUrl);
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
      <div style={{display:'flex', flexWrap: 'wrap'}}>
        <form onSubmit={this.handleSubmit}>
          <Input
            placeholder="First"
            onChange={this.handleChange}
            style={{ marginLeft: '10px', marginRight: '10px', marginTop: '10px', width: '200px' }}
          />
          <Input
            placeholder="Last"
            onChange={this.handleChange}
            style={{ marginLeft: '10px', marginRight: '10px', marginTop: '10px', width: '200px' }}
          />
          <Input
            placeholder="Image"
            onChange={this.handleChange}
            style={{ marginLeft: '10px', marginRight: '10px', marginTop: '10px', width: '100%' }}
          />
          <Button raised color='primary' type='submit'>
            Create
          </Button>
        </form>
      </div>
    )
  }
}


export default StudentForm