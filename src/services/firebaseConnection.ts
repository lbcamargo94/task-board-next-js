import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJEskCXtP4RPwBwzOXtECL_Me7p2i9ueM",
  authDomain: "task-board-next-js.firebaseapp.com",
  projectId: "task-board-next-js",
  storageBucket: "task-board-next-js.appspot.com",
  messagingSenderId: "854156200504",
  appId: "1:854156200504:web:45c538709b810cfbf4b4cd",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
