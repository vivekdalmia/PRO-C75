import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDH3FOTtMPhd_m2gAeE27nPhGRH1qpydKs",
  authDomain: "e-ride-app-f4e0a.firebaseapp.com",
  projectId: "e-ride-app-f4e0a",
  storageBucket: "e-ride-app-f4e0a.appspot.com",
  messagingSenderId: "276650056984",
  appId: "1:276650056984:web:f2b34f537d311a12f5526d"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
