// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
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