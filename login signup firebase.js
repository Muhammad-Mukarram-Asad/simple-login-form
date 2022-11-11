  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
  import {
    getFirestore,
    collection,
    addDoc,
    doc,
    setDoc,
    getDocs,
    query, 
    where,
    getDoc,
    onSnapshot,
    orderBy
  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
  
  import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";
  
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBOlb08vtobzsPn4SVH0QJImGUxlbeh0lA",
    authDomain: "data-store-e33c2.firebaseapp.com",
    projectId: "data-store-e33c2",
    storageBucket: "data-store-e33c2.appspot.com",
    messagingSenderId: "42629128052",
    appId: "1:42629128052:web:8c3212d688420b59bb9621"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);

 async function signUpFirebase(userInfo)
  {
    const {email, password} = userInfo;
    const userConfiguration = await createUserWithEmailAndPassword(auth,email,password);
    const user_id = userConfiguration.user.uid;
    await postUserDataToDb(userInfo, user_id);
  }

  function signInFirebase(email, password)
  {
    return signInWithEmailAndPassword(email,password);
  }

  function postUserDataToDb(userInfo, uid)
  {
    const {name,email,contact_number,age} = userInfo;
    return setDoc(doc(db, "user_log",uid), {name,email,contact_number,age});

  }
  export {signUpFirebase , signInFirebase, postUserDataToDb};