import "./App.css";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Register from "./Components/Register";
import React, { useState } from 'react';

function App() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  let showRegisterChild = (show) => {
    setShowRegister(show)
    setShowLogin(!show);
  }

  let showLoginChild = (show) => {
    setShowLogin(show);
    setShowRegister(!show);
  }
  return (
    <div className="wrapper">
      <Header showRegisterChild={showRegisterChild} showLoginChild={showLoginChild} />
      {showRegister ? <Register showLoginChild={showLoginChild} /> : <div></div>}
      {showLogin ? <Login showRegisterChild={showRegisterChild} /> : <div></div>}
      <main></main>
    </div>
  );
}

export default App;
