import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBpkO6mxgARjmobn1xqiaPFNrLNi9BrcLQ",
  authDomain: "kanban-project-cbf73.firebaseapp.com",
  projectId: "kanban-project-cbf73",
  storageBucket: "kanban-project-cbf73.appspot.com",
  messagingSenderId: "740125744281",
  appId: "1:740125744281:web:7f12394701bceb4f71ac08"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// Initialize Firebase
export { auth }