import * as actionTypes from "./actionTypes";
import * as processTypes from "../Shared/processTypes";
import Immutable from "seamless-immutable";

import CreateSensitiveStorage from "redux-persist-sensitive-storage"
import { persistReducer } from "redux-persist";

const initialState = Immutable({
  _loginProcess: { status: processTypes.IDLE },
  auth: {
    isUserAuthenticated: false,
    token:{}
  },
  user: {}
});

const storage = CreateSensitiveStorage({
  keychainService: "myKeychain",
  sharedPreferencesName: "mySharedPrefs"
});

const authPersistConfig = {
  key: "auth",
  storage,
  blacklist: ["_loginProcess"]
};

export const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.LOG_IN_REQUESTED:
      return {
        ...state,
        _loginProcess: { status: processTypes.PROCESSING }
      };
    case actionTypes.LOG_IN_FAILED: {
      return {
        ...state,
        _loginProcess: { status: processTypes.ERROR }
      };
    }
    case actionTypes.LOG_IN_INVALID: {
      return {
        ...state,
        _loginProcess: { status: processTypes.ERROR }
      };
    }
    case actionTypes.LOG_IN_SUCCEEDED:
      return {
        ...state,
        _loginProcess: { status: processTypes.SUCCESS },
        auth: {
          isUserAuthenticated: true,
          token: action.payload.token
        },
        user: action.payload.user
      };
    case actionTypes.SAVE_CREDENTIALS_REQUESTED:
      return {
        ...state,
        user: action.payload
      };
    case actionTypes.REFRESH_AUTH_SUCCEEDED:
      return {
        ...state,
        auth: { isUserAuthenticated: true, token: action.payload }
      }
    default:
      return state;
  }
};

export default persistReducer(authPersistConfig, authReducer);
