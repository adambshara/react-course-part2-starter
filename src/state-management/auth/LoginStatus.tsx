import useAuthStore from "./store";
import useAuth from "./useAuth";

const LoginStatus = () => {
  // const [user, dispatch] = useReducer(loginReducer, "");
  // const { user, dispatch } = useContext(LoginContext);
  //insted of of using the useContext we can use we can import loginContext
  //to the useAuth and the export it to the LoginStatus
  //just a different way.
  // const { user, dispatch } = useAuth();

  const { user, login, logout } = useAuthStore();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          {/* <a onClick={() => dispatch({ type: "Logout" })} href="#"> */}
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      {/* <a
        onClick={() => dispatch({ type: "Login", username: "Ahmad Bshara" })}
        href="#"
      > */}
      <a onClick={() => login("Ahmad Bshara")} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
