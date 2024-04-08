import React from "react";
import "./App.css";
import YoutubeForm from "./components/YoutubeForm";
import { Provider } from "react-redux";
import store from "./components/redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <YoutubeForm />
      </div>
    </Provider>
  );
}

export default App;
