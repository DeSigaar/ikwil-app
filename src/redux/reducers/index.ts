import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import history from "../../utils/history";

const rootReducer = combineReducers({
	router: connectRouter(history),
	firebase: firebaseReducer,
	firestore: firestoreReducer,
});

export default rootReducer;
