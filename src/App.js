import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComp from './component/navigation/NavbarComp';
import * as api from './services/api';
import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
      {!authenticated ? (
        <div>
          <label>Username: </label>
          <br />
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label>Password: </label>
          <br />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={createUser}>Create User</button>
          <button onClick={authUser}>Login</button>
        </div>
      ) : (
        <div className="App">
          <NavbarComp />
        </div>
      )}
    </div>
  );
}

export default App;
