import "./App.css";
// import AuthProvider from "./state-management/auth/AuthProvider";
import Counter from "./state-management/counter/Counter";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
// import TasksProvider from "./state-management/tasks/TasksProvider";
//you can use which ever one you want
import { TasksProvider } from "./state-management/tasks";

function App() {
  return (
    // <>
    //   {/* <TodoForm />
    //   <TodoList /> */}
    //   <Counter />
    // </>

    // <Counter />
    // <TaskList />
    // <LoginStatus />

    // <LoginContext.Provider value={{ user, dispatch: logindispatch }}>
    //   <TasksContext.Provider value={{ tasks, dispatch: tasksdispatch }}>
    //     <NavBar />
    //     <HomePage />
    //   </TasksContext.Provider>
    // </LoginContext.Provider>
    //we will replace <LoginContext.Provider> to <AuthProvider> because
    //we have already included everything in the <AuthProvider>
    // <AuthProvider>
    <TasksProvider>
      <Counter />
      <NavBar />
      <HomePage />
    </TasksProvider>
    // </AuthProvider>

    // <TasksContext.Provider value={{ user, dispatch. }}>
    //   <NavBar />
    //   <HomePage />
    // </TasksContext.Provider>
  );
}

export default App;
