import React from 'react';
import {
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const UserList = ({ users, onEdit, onDelete, onSelect }) => (
  <Container>
    <Typography variant="h4" component="h2" gutterBottom>
      User List
    </Typography>
    <List>
      {users.map(user => (
        <ListItem
          key={user.id}
          divider
          button
          onClick={() => onSelect(user)}
        >
          <ListItemText
            primary={user.name}
            secondary={user.email}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="edit" onClick={() => onEdit(user)}>
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={() => onDelete(user.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  </Container>
);

export default UserList;
