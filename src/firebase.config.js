import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD_F1CI9CLPdFAnKTJg7EctzbuLQ6lJdjA",
  authDomain: "foodeverywhere-6e10a.firebaseapp.com",
  databaseURL: "https://foodeverywhere-6e10a-default-rtdb.firebaseio.com",
  projectId: "foodeverywhere-6e10a",
  storageBucket: "foodeverywhere-6e10a.appspot.com",
  messagingSenderId: "324656611288",
  appId: "1:324656611288:web:920d6bc475048c6f8b7cad",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
