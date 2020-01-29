import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Appnavbar from './components/Appnavbar'
import Shoppinglist from './components/Shoppinglist'

import { Provider } from 'react-redux'
import store from './store'

import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Appnavbar/>
      <Shoppinglist/>
    </div>
    </Provider>
    
  );
}

export default App;
