import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import DeleteIcon from 'material-ui-icons/Delete'

class Header extends Component {

  componentWillUnmount() {
    //Important to refresh global state when remounting
     this.props.resetMe();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.deletedPost.error && nextProps.deletedPost.error.message) { //delete fail
      alert(nextProps.deletedPost.error.message || 'Could not delete. Please try again.');
    } else if(nextProps.deletedPost.post && !nextProps.deletedPost.error) { //delete success
      this.context.router.push('/');
    }
  }
  
	renderLinks() {
    const { type } = this.props
    
		if(type === 'student_index') {
        return (
        <div style= {{ width: '100%' }}>
          <AppBar position="static">
            <Toolbar>
              <Typography type="title" color="inherit" style={{ flex: 1 }}> Student Portal </Typography>
              <Button color="contrast" component={({...props}) => <Link to='/students' {...props} />}> New Student </Button>
            </Toolbar>
          </AppBar>
        </div>
        )
  	} else if(type === 'student_new') {
        return (
        <div style= {{ width: '100%' }}>
          <AppBar position="static">
            <Toolbar>
              <Button color="contrast" component={({...props}) => <Link to='/' {...props} />}> Back </Button>
              <Typography type="title" color="inherit" style={{ flex: 1 }}></Typography>
              <Button color="contrast" component={({...props}) => <Link to='/' {...props} />}> Create </Button>
            </Toolbar>
          </AppBar>
        </div>
  		 ) 		
  	} else if(type === 'student_show') {
  			return (
          <div style= {{ width: '100%' }}>
            <AppBar position="static">
              <Toolbar>
                <Button color="contrast" component={({...props}) => <Link to='/' {...props} />}> Back </Button>
                <Typography type="title" color="inherit" style={{ flex: 1 }}></Typography>
                <Button fab mini color="contrast" aria-label="edit" component={({...props}) => <Link to='/' {...props} />} style={{margin: '5px'}}>
                  <ModeEditIcon />
                </Button>
                <Button fab mini color="accent" aria-label="delete" onClick={()=> {this.props.onDeleteClick()}} style={{margin: '5px'}}>
                  <DeleteIcon />
                </Button>
              </Toolbar>
            </AppBar>
          </div>
  		  )
  	}
	}

	render() {
			return (
        <nav className="navbar navbar-default navbar-static-top">
            <div id="navbar" className="navbar-collapse collapse">
              {this.renderLinks()}
            </div>     
        </nav>				
			)
	}
}

export default Header