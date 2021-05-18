import React, {useEffect, useState} from 'react'

function Users() {
  const [allUsers, setAllUsers] = useState()
  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(response => response.json())
    .then(data => setAllUsers(data))
    .catch(err => console.log(err))
  },[])
  console.log( 'all users' , allUsers)
  return (
  <ul class="collection with-header">
      <li class="collection-header"><h4>All Users</h4></li>
      {!allUsers ? <h2>Loading...</h2> :allUsers.map(user =>{
        return (
        <li class="collection-item">Name: {user.firstName} / Email: {user.email} </li>
        )
      })}
  </ul>
  )
}
export default Users