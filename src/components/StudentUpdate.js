import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { updateStudent } from '../actions/student_actions'
import {EnvironmentConstants} from '../gobals'
import Input from 'material-ui/Input'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'

class StudentUpdate extends Component {

  constructor(props) {
    super(props)

    this.state = {
      oldStudent: {
        ...this.props.activeStudent.student
      },
      inputStudent: {
        FirstName: null,
        LastName: null,
        ProfileImage: null
      }
    }
  }

  componentDidMount() {
    this.props.resetMe()
  }

  handleChange = (e) => {
    let stateClone = {...this.state.inputStudent}
    switch(e.target.id){
      case 'first':
        stateClone.FirstName = e.target.value
        this.setState({
          inputStudent: {...stateClone}
        })
        return
      case 'last':
        stateClone.LastName = e.target.value
        this.setState({
          inputStudent: {...stateClone}
        })
        return
      case 'image':
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
    this.validate(this.state.inputStudent)
  }

  validate = (input) => {
    let validStudent = {
      FirstName: input.FirstName ? input.FirstName : this.state.oldStudent._FirstName,
      LastName: input.LastName ? input.LastName : this.state.oldStudent._LastName,
      ProfileImage: input.ProfileImage ? input.ProfileImage : this.state.oldStudent._ProfileImage,
    }
    this.props.onUpdateClick(validStudent, this.props.id)
  }

  render() {
    return (
      <div style={{flexGrow: 1, marginTop: '20%'}}>
        <form onSubmit={this.handleSubmit}>
          <Grid container spacing={24}>
            <Grid item xs={3}></Grid>
            <Grid item container xs={6}>
              <Grid item xs={6}>
                <Input
                  id='first'
                  onChange={this.handleChange}
                  placeholder={`${this.state.oldStudent._FirstName}`}
                  style={{ marginTop: '10px', width: '100%'}}
                />
              </Grid>
              <Grid item xs={6}>
                <Input
                  id='last'
                  onChange={this.handleChange}
                  placeholder={`${this.state.oldStudent._LastName}`}
                  style={{ marginTop: '10px', width: '100%'}}
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  id='image'
                  onChange={this.handleChange}
                  placeholder={`${this.state.oldStudent._ProfileImage}`}
                  style={{ marginTop: '10px', width: '100%' }}
                />
              </Grid>
              <Grid item xs={12} style={{marginLeft:0}}>
                <Button raised color='primary' type='submit' style={{ width: '100%', marginLeft: '0' }}>
                  Update
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    )
  }
}


export default StudentUpdate