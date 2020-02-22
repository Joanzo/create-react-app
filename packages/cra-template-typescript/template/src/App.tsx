import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const getEnvValues = () => {
    if (!process.env.REACT_APP_EMPLOYEE_ID || !process.env.REACT_APP_POSITION_ID) {
      throw new Error('Please define `REACT_APP_EMPLOYEE_ID` and `REACT_APP_POSITION_ID` in your .env file');
    }

    const employeeID = process.env.REACT_APP_EMPLOYEE_ID
    const position = process.env.REACT_APP_POSITION_ID;

    return { employeeID, position };
  }

  const { employeeID, position } = getEnvValues();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
