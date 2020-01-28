import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Appnavbar from './components/Appnavbar'
import Shoppinglist from './components/Shoppinglist'

import './App.css';

function App() {
  return (
    <div className="App">
      <Appnavbar></Appnavbar>
      <Shoppinglist></Shoppinglist>
    </div>
  );
}

export default App;
