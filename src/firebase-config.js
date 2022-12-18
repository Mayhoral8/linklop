import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';
import {getAuth} from 'firebase/auth';
import {getStorage, ref} from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyAffoWtDMvBln2P10Gy2gynGivKPXTYeGU",
  authDomain: "crud-pr-c430e.firebaseapp.com",
  databaseURL: "https://crud-pr-c430e-default-rtdb.firebaseio.com",
  projectId: "crud-pr-c430e",
  storageBucket: "crud-pr-c430e.appspot.com",
  messagingSenderId: "475785206028",
  appId: "1:475785206028:web:b5a81e409e80ffdb82d129"
};


  const app = initializeApp(firebaseConfig);
  export const fetchUrl = firebaseConfig.databaseURL;
  export const db = getDatabase(app);
  export const auth = getAuth(app);
  export const storage = getStorage(app);
  export const storageRef = ref;