import { createStore } from "redux";
import userReducer from "./Reducer";
const store = createStore(userReducer);
export default store;
