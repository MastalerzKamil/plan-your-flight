import React from 'react';
import { Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" component={MainPage} />
        {/* <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} /> */}
      </div>
    </Router>
  )
}

export default App;
