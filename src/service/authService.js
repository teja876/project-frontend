const doLogin = (username, userType) => {
  localStorage.setItem("username", username);
  localStorage.setItem("isLoggedIn", true);
  localStorage.setItem("userType", userType);
};

const isLoggedIn = () => {
  return Boolean(localStorage.getItem("isLoggedIn"));
};

const handleLogout = (props) => {
  localStorage.removeItem("username");
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userType");
  props.history.push("/login");
};

export default {
  doLogin,
  isLoggedIn,
  handleLogout,
};
