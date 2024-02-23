import { LOGIN, LOGOUT } from "./Action_Types";

function handleLogin() {
  return {
    type: LOGIN,
    payload: true,
  };
}

function handleLogout() {
  return {
    type: LOGOUT,
    payload: false,
  };
}

export { handleLogin, handleLogout };
