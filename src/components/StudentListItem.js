import React from 'react'
import { Link } from 'react-router-dom'
import { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Grid from 'material-ui/Grid'
import Divider from 'material-ui/Divider'
import FolderIcon from 'material-ui-icons/Folder'

const StudentListItem = (props) => {

  let student = props.student
  
  return (
    <Grid item xs={12} style={{ marginTop: '10px', width: '100%'}} key={student._Id}>
      <ListItem button component={({...props}) => <Link to={`/students/details/${student._Id}`} {...props} />} key={student._Id}>
        <ListItemAvatar key={student._Id}>
            {
              student._ProfileImage.length > 0 ? 
              <Avatar src={`${student._ProfileImage.trim()}`} key={student._Id}></Avatar> : 
              <Avatar key={student._Id}><FolderIcon /></Avatar>
            }
        </ListItemAvatar>
        <ListItemText primary={`${student._FirstName} ${student._LastName}`} />
      </ListItem>
      <Divider light />
    </Grid>
  )
}

export default StudentListItem