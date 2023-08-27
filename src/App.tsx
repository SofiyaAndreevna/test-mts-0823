import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Timer from './components/Timer/Timer';
import Messages from './components/Messages/Messages';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="App container mt-5">
        <Timer />
        <Messages />
      </div>
    </Provider>
  );
}

export default App;
