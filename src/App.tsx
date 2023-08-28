import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Timer from './components/Timer/Timer';
import Messages from './components/Messages/Messages';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { AppContainer } from './App.styles';

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        {/* <div className="App container mt-5"> */}
        <Timer />
        <Messages />
        {/* </div> */}
      </AppContainer>
    </Provider>
  );
}

export default App;
