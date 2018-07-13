import { HOST } from "../Shared/defaults";
import { objectToPlainLowercase } from "../../lib/utils";
export default class AuthService {
  static login(user) {
    const url = HOST.concat("/api/v1/auth/token");

    var myHeaders = new Headers();
    myHeaders.append("content-type", "application/json");
    myHeaders.append("X-Custom-Header", "ProcessThisImmediately");
    const request = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(objectToPlainLowercase(user))
    };

    return fetch(url, request)
      .then(response => {
        return response;
      })
      .catch(error => {
        throw error;
      });
  }

  static refreshToken(token) {
    const url = HOST.concat("/api/v1/auth/refresh_token");

    var myHeaders = new Headers();
    myHeaders.append("content-type", "application/json");
    myHeaders.append("X-Custom-Header", "ProcessThisImmediately");
    const request = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: token
      })
    };

    return fetch(url, request)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
  }
}
