import React, { useState, useEffect } from 'react';

import Header from "./components/Header";
import api from "./services/api";

import CardUsers from "./components/Users"; 

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    async function loadUsers(){
      const user = await api.get("users");
      setUsers(user.data);
    }
    loadUsers();
  },[]);

  return (
    <div className="Container">
      <Header/>
      <div className="Box">

      { users.map((user)=>(
        <CardUsers data={user}/>
        ))}
    
      </div>
      </div>
  );
}

export default App