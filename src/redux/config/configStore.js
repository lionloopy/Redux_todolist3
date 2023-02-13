import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";

//configStore: 중앙저장관리소 store을 만든 공간
const rootReducer = combineReducers({
  todos,
});
const store = createStore(rootReducer);
export default store;
