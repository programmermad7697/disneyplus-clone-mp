import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAlbMJkFUHCxiz_S8lEmKC3g3WUSH8RzMU",
  authDomain: "disneyplus-mp.firebaseapp.com",
  projectId: "disneyplus-mp",
  storageBucket: "disneyplus-mp.appspot.com",
  messagingSenderId: "244809844226",
  appId: "1:244809844226:web:5678f89eb7260dd1ba891b",
  measurementId: "G-ZP827VPQXW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;