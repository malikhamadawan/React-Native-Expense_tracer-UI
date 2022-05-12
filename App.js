import 'react-native-gesture-handler';
import React from 'react';
import MyStack from './src/navigation/MyStack'; 
import { store,persistor } from './src/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <MyStack />
      </PersistGate>
    </Provider>
  );
};
export default App;