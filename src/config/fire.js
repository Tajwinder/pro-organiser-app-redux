import firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBbLKtXKHlmdFAKvTKHbq7tMd00nNo6FDc",
    authDomain: "pro-organizer-app-redux-f7167.firebaseapp.com",
    databaseURL: "https://pro-organizer-app-redux-f7167.firebaseio.com",
    projectId: "pro-organizer-app-redux-f7167",
    storageBucket: "pro-organizer-app-redux-f7167.appspot.com",
    messagingSenderId: "910776551153",
    appId: "1:910776551153:web:e19075d9d1a9f4e7df0b50"
  };
  // Initialize Firebase
 const fire= firebase.initializeApp(firebaseConfig);

export default fire;
