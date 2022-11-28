import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD9rmN0NHHIEQ9GQ4Ip1eX95y8rnlIh3j4",
  authDomain: "comsite.firebaseapp.com",
  databaseURL: "https://comsite-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "comsite",
  storageBucket: "comsite.appspot.com",
  messagingSenderId: "87440933900",
  appId: "1:87440933900:web:27711c7cafafa97241da29"
};

export const app = initializeApp(firebaseConfig);