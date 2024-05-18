import React, { useState, useEffect } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
} from '@mui/material';

const UserDetails = ({ user, onSave, onCancel }) => {
  const [userDetails, setUserDetails] = useState(user);

  useEffect(() => {
    if (user) {
      setUserDetails(user);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(userDetails);
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          User Details
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
          <TextField
            label="Name"
            name="name"
            value={userDetails.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone"
            name="phone"
            value={userDetails.phone}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Website"
            name="website"
            value={userDetails.website}
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

export default UserDetails;
