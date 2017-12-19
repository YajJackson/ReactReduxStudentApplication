import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import {EnvironmentConstants} from '../gobals'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import ModeEditIcon from 'material-ui-icons/ModeEdit'
import DeleteIcon from 'material-ui-icons/Delete'

export default class Header extends Component {
  
  renderLinks() {
    const { type } = this.props

		switch(type) {
      case 'student_home':  
        return (
          <div style= {{ width: '100%' }}>
            <AppBar position="static">
              <Toolbar>
                <Typography type="title" color="inherit" style={{ flex: 1 }}> Student Portal </Typography>
                <Button color="contrast" component={({...props}) => <Link to='/students/new' {...props} />}> New Student </Button>
              </Toolbar>
            </AppBar>
          </div>
        )
  	  case 'student_new':
        return (
          <div style= {{ width: '100%' }}>
            <AppBar position="static">
              <Toolbar>
                <Button color="contrast" component={({...props}) => <Link to='/' {...props} />}> Back </Button>
                <Typography type="title" color="inherit" style={{ flex: 1 }}></Typography>
              </Toolbar>
            </AppBar>
          </div>
        ) 		
  	  case 'student_details':
  			return (
          <div style= {{ width: '100%' }}>
            <AppBar position="static">
              <Toolbar>
                <Button color="contrast" component={({...props}) => <Link to='/' {...props} />}> Back </Button>
                <Typography type="title" color="inherit" style={{ flex: 1 }}></Typography>
                <Button fab mini color="contrast" aria-label="edit" component={({...props}) => <Link to={`/students/edit/${parseInt(window.location.href.split('/').splice(-1)[0])}`} {...props} />} style={{margin: '5px'}}>
                  <ModeEditIcon />
                </Button>
                <Button fab mini color="accent" aria-label="delete" onClick={()=> {this.props.onDeleteClick()}} style={{margin: '5px'}}>
                  <DeleteIcon />
                </Button>
              </Toolbar>
            </AppBar>
          </div>
  		  )
      case 'student_update':
        return (
          <div style= {{ width: '100%' }}>
            <AppBar position="static">
              <Toolbar>
                <Button color="contrast" component={({...props}) => <Link to='/' {...props} />}> Back </Button>
              </Toolbar>
            </AppBar>
          </div>
        )
    }
	}

	render() {
    return <nav>{this.renderLinks()}</nav>				
	}
}
