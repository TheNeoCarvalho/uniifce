import React from 'react';

import "./styles.css";

function App(props) {

  return (
    <div className="card">
      <div className="cardHeader">
      <img src="https://api.adorable.io/avatars/525/" alt=""/>
      </div>
      <div className="cardBody">
        <label><span>Nome:</span> {props.data.name}</label>        
        <label><span>Email:</span> {props.data.email}</label>
        <label><span>Techs:</span> { props.data.techs.map(t => <span>{t}</span>) }</label>
      </div>
    </div>
  );
}

export default App