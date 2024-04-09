import React from "react";
import "./App.css";
// import YoutubeForm from "./components/YoutubeForm";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import CourseEnrollment from "./components/CourseEnrollment";

function App() {
  return (
    <Provider store={store}>
      {/* <LoginForm /> */}
      {/* <RegisterForm /> */}
      <CourseEnrollment />
    </Provider>
  );
}

export default App;
