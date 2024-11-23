import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "task-board-next-js.firebaseapp.com",
  projectId: "task-board-next-js",
  storageBucket: "task-board-next-js.appspot.com",
  messagingSenderId: "",
  appId: "",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
