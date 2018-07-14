import React, { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

//import redux store
import store, { persistor } from "./Store/configureStore";
import { View, Text } from "react-native";

import SplashScreen from "./Screens/SplashScreen";
import App from "./Screens/App";

class QuicklaneStores extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<SplashScreen />} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    );
  }
}

export default QuicklaneStores;
