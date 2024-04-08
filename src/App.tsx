import React from "react";
import "./App.css";
// import YoutubeForm from "./components/YoutubeForm";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import FormikContainer from "./components/FormikContainer";

function App() {
  return (
    <Provider store={store}>
      {/* <div className="App">
        <YoutubeForm />
      </div> */}
      <FormikContainer />
    </Provider>
  );
}

export default App;
