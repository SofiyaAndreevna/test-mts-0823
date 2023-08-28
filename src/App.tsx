import React from 'react';
import Timer from './components/Timer/Timer';
import Messages from './components/Messages/Messages';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { AppContainer } from './App.styles';

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <Timer />
        <Messages />
      </AppContainer>
    </Provider>
  );
}

export default App;
