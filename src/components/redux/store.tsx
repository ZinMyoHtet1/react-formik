import { createStore } from "redux";
import userReducer from "./userProfile/userReducer";

const store = createStore(userReducer);

export default store;
