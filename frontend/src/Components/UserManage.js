import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure Font Awesome is imported
import '../assets/css/UserManage.css';

const UserManage = () => {
  const [users, setUsers] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newUser, setNewUser] = useState({
    firstName: '', lastName: '', email: '', password: '', mobile: '', roles: ''
  });
  const [editingUser, setEditingUser] = useState(null);
  const [editForm, setEditForm] = useState({
    firstName: '', lastName: '', email: '', password: '', mobile: '', roles: ''
  });

  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8080/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users', error);
      }
    };

    fetchUsers();
  }, []);

  const addUser = async () => {
    try {
      const response = await axios.post('http://localhost:8080/users', newUser);
      setUsers([...users, response.data]);
      setNewUser({
        firstName: '', lastName: '', email: '', password: '', mobile: '', roles: ''
      });
      setShowAddModal(false);
    } catch (error) {
      console.error('Error adding user', error);
    }
  };

  const updateUser = async () => {
    try {
      await axios.put(`http://localhost:8080/users/${editingUser.id}`, editForm);
      setUsers(users.map(user => (user.id === editingUser.id ? { ...user, ...editForm } : user)));
      setEditingUser(null);
      setEditForm({
        firstName: '', lastName: '', email: '', password: '', mobile: '', roles: ''
      });
      setShowEditModal(false);
    } catch (error) {
      console.error('Error updating user', error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:8080/users/${userId}`);
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user', error);
    }
  };

  const handleClose = () => {
    navigate('/admin'); // Replace '/admin' with your actual admin route
  };

  return (
    <div className="user-mana">
      <div className="user-management">
        <div className="header">
          <h1>Manage Users</h1>
          <span onClick={handleClose} className="close-icon">
            <i className="fas fa-times"></i>
          </span>
        </div>
        <button onClick={() => setShowAddModal(true)} className="user-action-button">Add User</button>

        {/* Table View */}
        <table className="user-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Roles</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) && users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>{user.roles}</td>
                <td>
                  <button onClick={() => {
                    setEditingUser(user);
                    setEditForm({
                      firstName: user.firstName,
                      lastName: user.lastName,
                      email: user.email,
                      password: '', // Leave password blank for edit
                      mobile: user.mobile,
                      roles: user.roles
                    });
                    setShowEditModal(true);
                  }} className="user-edit-button">Edit</button>
                  <button onClick={() => deleteUser(user.id)} className="user-delete-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Add User Modal */}
        {showAddModal && (
          <div className="user-modal-overlay" onClick={() => setShowAddModal(false)}>
            <div className="user-modal-content" onClick={e => e.stopPropagation()}>
              <h2>Add User</h2>
              <div className="user-modal-grid">
                <input
                  type="text"
                  placeholder="First Name"
                  value={newUser.firstName}
                  onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={newUser.lastName}
                  onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={newUser.password}
                  onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Mobile"
                  value={newUser.mobile}
                  onChange={(e) => setNewUser({ ...newUser, mobile: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Roles"
                  value={newUser.roles}
                  onChange={(e) => setNewUser({ ...newUser, roles: e.target.value })}
                />
              </div>
              <button onClick={addUser} className="user-action-button">Add User</button>
              <button onClick={() => setShowAddModal(false)} className="user-close-modal-button">Close</button>
            </div>
          </div>
        )}

        {/* Edit User Modal */}
        {showEditModal && editingUser && (
          <div className="user-modal-overlay" onClick={() => setShowEditModal(false)}>
            <div className="user-modal-content" onClick={e => e.stopPropagation()}>
              <h2>Edit User</h2>
              <div className="user-modal-grid">
                <input
                  type="text"
                  placeholder="First Name"
                  value={editForm.firstName}
                  onChange={(e) => setEditForm({ ...editForm, firstName: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={editForm.lastName}
                  onChange={(e) => setEditForm({ ...editForm, lastName: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={editForm.email}
                  onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={editForm.password}
                  onChange={(e) => setEditForm({ ...editForm, password: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Mobile"
                  value={editForm.mobile}
                  onChange={(e) => setEditForm({ ...editForm, mobile: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Roles"
                  value={editForm.roles}
                  onChange={(e) => setEditForm({ ...editForm, roles: e.target.value })}
                />
              </div>
              <button onClick={updateUser} className="user-action-button">Update User</button>
              <button onClick={() => setShowEditModal(false)} className="user-close-modal-button">Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserManage;
