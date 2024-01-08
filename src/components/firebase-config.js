// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
//import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBlar6dj-2Bhp0Kq5ObIvHSvVvSgMWFK-o',
  authDomain: 'react-redux-12c26.firebaseapp.com',
  projectId: 'react-redux-12c26',
  storageBucket: 'react-redux-12c26.appspot.com',
  messagingSenderId: '25257495890',
  appId: '1:25257495890:web:6c43453195daf989937e8b',
  measurementId: 'G-GEC55F1LJ8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore(app);
