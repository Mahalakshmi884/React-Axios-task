import React, { useState, useEffect } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
} from '@mui/material';

const UserForm = ({ onSave, userToEdit, onCancel }) => {
  const [user, setUser] = useState({ name: '', email: '', phone: '', website: '' });

  useEffect(() => {
    if (userToEdit) {
      setUser(userToEdit);
    }
  }, [userToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(user);
    setUser({ name: '', email: '', phone: '', website: '' });
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          {userToEdit ? 'Edit User' : 'Add User'}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
          <TextField
            label="Name"
            name="name"
            value={user.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Website"
            name="website"
            value={user.website}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary" style={{ marginRight: '10px' }}>
              Save
            </Button>
            <Button variant="outlined" color="secondary" onClick={onCancel}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default UserForm;
