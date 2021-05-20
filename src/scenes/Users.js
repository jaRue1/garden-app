import React, {useEffect, useState} from 'react'
import { Button } from 'react-materialize'

function Users() {
  const [allUsers, setAllUsers] = useState()
  const [newUser, setNewUser] = useState({})
  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(response => response.json())
    .then(data => setAllUsers(data))
    .catch(err => console.log(err))
  },[])
  function createUser() {
    fetch('http://localhost:5000/signup' , { 
      method:'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
  }
  console.log(allUsers)
  return (
  <div className='container custom-container'>
  <ul class="collection with-header">
      <li class="collection-header"><h4>All Users</h4></li>
      {!allUsers ? <h2>Loading...</h2> : allUsers.map(user =>{
        return (
          // key ={user.id} need to add this somewhere
        <li  class="collection-item">Name: {user.firstName} {user.lastName} / Email: {user.email} </li>
        )
      })}
  </ul>
  
  <label>First Name</label>
  <input onChange = {(e) => setNewUser({ ...newUser, firstName: e.target.value})} />
  <label>Last Name</label>
  <input onChange = {(e) => setNewUser({ ...newUser, lastName: e.target.value})} />
  <label>Email</label>
  <input onChange = {(e) => setNewUser({ ...newUser, email: e.target.value})} />
  <label>Password</label>
  <input onChange = {(e) => setNewUser({ ...newUser, password: e.target.value})} />
  
  <Button onClick = {() => createUser()}>Create User</Button>
  </div>
  )
}
export default Users