// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import UserForm from './components/UserForm';
import { Container } from '@mui/material';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleAddUser = (user) => {
    axios.post('https://jsonplaceholder.typicode.com/users', user)
      .then(response => {
        setUsers([...users, response.data]);
      })
      .catch(error => {
        console.error('Error adding user:', error);
      });
  };

  const handleEditUser = (user) => {
    axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, user)
      .then(response => {
        setUsers(users.map(u => (u.id === user.id ? response.data : u)));
        setEditingUser(null);
        setSelectedUser(response.data);
      })
      .catch(error => {
        console.error('Error updating user:', error);
      });
  };

  const handleDeleteUser = (userId) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== userId));
        setSelectedUser(null);
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  const handleSaveUser = (user) => {
    if (user.id) {
      handleEditUser(user);
    } else {
      handleAddUser(user);
    }
    setEditingUser(null);
  };

  return (
    <Container>
      <UserList 
        users={users} 
        onEdit={setEditingUser} 
        onDelete={handleDeleteUser} 
        onSelect={setSelectedUser}
      />
      {selectedUser && (
        <UserDetails 
          user={selectedUser} 
          onSave={handleSaveUser} 
          onCancel={() => setSelectedUser(null)} 
        />
      )}
      <UserForm 
        onSave={handleSaveUser} 
        userToEdit={editingUser} 
        onCancel={() => setEditingUser(null)} 
      />
    </Container>
  );
};

export default App;
