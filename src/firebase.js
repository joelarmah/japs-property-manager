import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
  sendEmailVerification,
} from 'firebase/auth';
import { getFirestore, query, getDocs, collection, where, addDoc, setDoc, doc, deleteDoc, Timestamp, updateDoc } from 'firebase/firestore';
import { PROPERTIES } from './constants/firebaseConstants';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, 'users'), where('uid', '==', user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      });
    }
  } catch (err) {
    throw handleFirebaseError(err);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const { user } = res;
    const newUser = getNewUser(user, user.displayName)
    return newUser;
  } catch (err) {
    throw handleFirebaseError(err);
  }
};

const registerWithEmailAndPassword = async (fullName, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user;

    await updateUserDisplayName(user, fullName)

    // console.log(`currentUser ==> ${JSON.stringify(auth.currentUser)}`)

    const newUser = getNewUser(user, fullName)

    const docRef = doc(db, 'users', user.uid);
    await setDoc(docRef, newUser, { merge: true });

    await sendEmailVerification(user);
    return newUser;
  } catch (err) {
    throw handleFirebaseError(err);
  }
};

const getNewUser = (user, fullName) => {
  return  {
    uid: user.uid,
    authProvider: 'local',
    name: fullName,
    profilePhoto: user.photoURL,
    email: user.email,
    token: user.stsTokenManager.accessToken,
    role: 'Admin',
  };
}

const updateUserDisplayName = async (user, fullName) => {
  updateProfile(user, { displayName: fullName, photoURL: null })
    .then(() => {
      return auth.currentUser;
    })
    .catch((error) => {
      throw error;
    });
};

const sendPasswordReset = async (email) => {
  try {
    return await sendPasswordResetEmail(auth, email);
  } catch (err) {
    throw handleFirebaseError(err);
  }
};

const logout = () => {
  signOut(auth);
};

const addProperty = async (property) => {
  // const { location } = property;

  try {
    // const propertyRef = await addDoc(collection(db, PROPERTIES), {
    //   propertyType: property.propertyType,
    //   structureType: property.structureType,
    //   location: {
    //     address1: location.address1,
    //     address2: location.address2,
    //     city: location.city,
    //     region: location.region
    //   },
    //   createdAt: Timestamp.fromDate(new Date())
    // });

    // Add a new document with a generated id
    const propertyRef = doc(collection(db, PROPERTIES));
    await setDoc(propertyRef, {...property, createdAt: Timestamp.fromDate(new Date())});

    console.log(`Propert Ref ==> ${JSON.stringify(propertyRef)}`)
  } catch (err) {
    throw handleFirebaseError(err);
  }
};

const fetchProperties = async () => {
  try {
    const docSnap = await getDocs(collection(db, PROPERTIES));
    return docSnap.docs.map((doc) => ({...doc.data(), id:doc.id }));
  } catch (err) {
    throw handleFirebaseError(err);
  }
}

const deleteProperty = async(propertyId) => {
  try {
    const db = getFirestore(); const docRef = doc(db, PROPERTIES, propertyId); 
    return deleteDoc(docRef);
  } catch (err) {
    throw handleFirebaseError(err);
  }
}

const updateProperty = async(propertyId, data) => {
  const propertyRef = doc(db, "id", propertyId);
  try {
    updateDoc(propertyRef, {...data});
  } catch (err) {
    throw handleFirebaseError(err);
  }
}

function handleFirebaseError(error) {
  let errorMessage = '';
  console.error(`${error}`);
  if (error.code === 'auth/email-already-in-use') {
    errorMessage = 'Email address is already signed up';
  } else if (error.code === 'auth/invalid-email') {
    errorMessage = 'Email address is invalid';
  } else if (error.code === 'auth/weak-password') {
    errorMessage = 'Password is weak.  Password should be at least 6 characters';
  } else if (error.code === 'auth/user-not-found') {
    errorMessage = 'Provided email does not belong to a registered user';
  } else {
    errorMessage = error.code;
  }
  return errorMessage;
}

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  addProperty,
  fetchProperties,
  deleteProperty,
  updateProperty
};
