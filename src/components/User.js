import React, { useState } from 'react'

export const User = ({User}) => {
    const {firstName, lastName, email, OrgID, UserID, valid} = User;
    const [newUserID, setNewUserID] = useState(UserID);
    const [newFirstName, setNewFirstName] = useState(firstName);
    const [newLastName, setNewLastName] = useState(lastName);
    const [newOrgID, setNewOrgID] = useState(OrgID);
    const [newEmail, setNewEmail] = useState(email);
    const [isValid, setIsValid] = useState(valid);
  return (
    <div>
       <body>
        <h1>Hi, {firstName} {lastName}!</h1>
        <p>Email: {email}</p>
        <p>UserID: {UserID}</p>
        <p>OrgID: {OrgID}</p>
       </body>
    </div>
  )
}
