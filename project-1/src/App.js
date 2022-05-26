import React, { useState, Fragment } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([]);

  const onAddUserHandler = (name, age) => {
    setUsersList((prevUsersList) => [...prevUsersList, { name, age, id: Math.random().toString() }])
  };

  return (
    <Fragment>
      <AddUser onAddUser={onAddUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
