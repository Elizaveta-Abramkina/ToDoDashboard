import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAewUD2fi26tcVdiZasZ75lkL4S1OQ050k",
  authDomain: "tododashbourd.firebaseapp.com",
  databaseURL: "https://tododashbourd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tododashbourd",
  storageBucket: "tododashbourd.appspot.com",
  messagingSenderId: "783829541816",
  appId: "1:783829541816:web:9145b3e86e27d811dca54d",
  measurementId: "G-7LQYEQBZVT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
