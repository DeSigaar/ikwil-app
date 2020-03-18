/* eslint-disable no-console */
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const fireApp = firebase.initializeApp({
	apiKey: process.env.REACT_APP_firebase_apiKey,
	appId: process.env.REACT_APP_firebase_appId,
	authDomain: process.env.REACT_APP_firebase_authDomain,
	databaseURL: process.env.REACT_APP_firebase_databaseURL,
	measurementId: process.env.REACT_APP_firebase_measurementId,
	messagingSenderId: process.env.REACT_APP_firebase_messagingSenderId,
	projectId: process.env.REACT_APP_firebase_projectId,
	storageBucket: process.env.REACT_APP_firebase_storageBucket,
});
export const fireAuth = fireApp.auth();
export const fireStore = fireApp.firestore();

export const firebaseManager = {
	getAuthReference: (): unknown => fireAuth,
	getStoreReference: (path: string): unknown => fireStore.collection(path),
	signInWithEmailAndPassword(email: string, password: string): boolean {
		fireAuth
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				return true;
			})
			.catch(error => {
				console.error(error);
				return false;
			});
		return true;
	},
	createUserWithEmailAndPassword(email: string, password: string): boolean {
		fireAuth
			.createUserWithEmailAndPassword(email, password)
			.then(() => {
				return true;
			})
			.catch(error => {
				console.error(error);
				return false;
			});
		return true;
	},
	isLoggedIn(): boolean {
		return fireAuth.currentUser !== null;
	},
	signOut(): unknown {
		return fireAuth
			.signOut()
			.then(() => console.log("Firebase Auth: ", "Succesfully signed out."))
			.catch(error => console.error("Firebase Auth: ", error));
	},
};
