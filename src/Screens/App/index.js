import React, { Component } from "react";

import { connect } from "react-redux";
import { StackNavigator } from "react-navigation";

import { getauth } from "../../Store/Authentication/selectors";
import SelectOrganization from "../SelectOrganization";
import Login from "../Login";
import SplashScreen from "../SplashScreen";

//#region navigator
const HomeRoute = StackNavigator({
  Home: {
    screen: SplashScreen
  }
});
const LoginRoute = StackNavigator({
  SelectOrganization: {
    screen: SelectOrganization,
    navigationOptions: {
      headerTitle: "Select Organization"
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerTitle: "Log in"
    }
  }
});

//#endregion

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { isUserAuthenticated } = this.props.auth;
    if (isUserAuthenticated) {
      return <HomeRoute  navigation={this.props.navigation}/>;
    } else {
      return <LoginRoute navigation={this.props.navigation}/>;
    }
  }
}

const mapStateToProps = state => {
  return {
    auth: getauth(state.auth)
  };
};

export default connect(mapStateToProps)(App);
