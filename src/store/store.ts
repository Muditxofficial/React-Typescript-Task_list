import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import listReducer from "./reducer/listReducer";
import notificationReducer from "./reducer/notificationReducer";

//Root reducer
const rootReducer = combineReducers({
  list: listReducer,
  notification: notificationReducer,
});
//store - single source of data
//The Store contains the consolidated reducers and the state.
const store = createStore(rootReducer, composeWithDevTools());
//Note that we do not have to explicitly declare a new interface for RootState.
//We can use ReturnType to infer state shape from the rootReducer
export type RootState = ReturnType<typeof rootReducer>;
export default store;
// redux devtools extension to check
//in my browser which types has been dispatched.
