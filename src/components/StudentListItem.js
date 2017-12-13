import React from 'react'
import { Link } from 'react-router-dom';
import { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import FolderIcon from 'material-ui-icons/Folder'

const StudentListItem = (props) => {

  let student = props.student

  return (
  <ListItem button component={({...props}) => <Link to={`/students/details/${student._Id}`} {...props} />}>
        <ListItemAvatar>
            {student._ProfileImage.length > 0 ? 
              <Avatar src={`${student._ProfileImage.trim()}`}></Avatar> : 
              <Avatar><FolderIcon /></Avatar>
            }
        </ListItemAvatar>
        <ListItemText primary={`${student._FirstName} ${student._LastName}`} />
      </ListItem>
    )
}

export default StudentListItem