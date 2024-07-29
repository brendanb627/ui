import React from 'react'
import { AddUserForm } from './AddUserForm'
import { useLocation } from 'react-router-dom';

export const Homepage = () => {
const location = useLocation();
const { state } = location;
const user = location.state;

if (state) {
    const user = state;
    return (
      <div>
        <h1>Welcome, {user.firstName} {user.lastName}!</h1>
        {/* ... */}
      </div>
    );
  } else {
    return <div>No user data available</div>;
  }
};
