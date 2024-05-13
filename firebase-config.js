// firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyD_cjbblv1tXWMj19EvYNBQ7LMHRAvm4Zc",
    authDomain: "iberialite.firebaseapp.com",
    projectId: "iberialite",
    storageBucket: "iberialite.appspot.com",
    messagingSenderId: "342359332534",
    appId: "1:342359332534:web:7eb7b26a01bd68c7aeb817",
    measurementId: "G-60NQC5526Z"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };

