// import { ReactNode, useReducer } from "react";
// // import loginReducer from "./auth/loginReducer";
// import authContext from "./authContext";

// interface LoginAction {
//   type: "Login";
//   username: string;
// }
// interface LogoutAction {
//   type: "Logout";
// }

// export type AuthAction = LoginAction | LogoutAction;
// const loginReducer = (task: string, action: AuthAction) => {
//   switch (action.type) {
//     case "Login":
//       return action.username;
//     case "Logout":
//       return "";
//       return task;
//   }
// };

// interface Props {
//   children: ReactNode;
// }

// const AuthProvider = ({ children }: Props) => {
//   const [user, dispatch] = useReducer(loginReducer, "");
//   //we changed it from loginDispatcher to Dispatch because we are
//   //only using it here
//   return (
//     <authContext.Provider value={{ user, dispatch }}>
//       {children}
//     </authContext.Provider>
//   );
// };

// export default AuthProvider;
