import React from 'react';
import { Router, Route } from 'react-router-dom';
import MainPage from 'pages/MainPage';

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={MainPage} />
      </div>
    </Router>
  );
}

export default App;
