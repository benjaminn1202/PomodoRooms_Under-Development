import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    GoogleAuthProvider, 
    signInWithPopup,
    onAuthStateChanged
  } from "firebase/auth";
  import { doc, setDoc, getDoc } from "firebase/firestore";
  import { auth, db } from "./firebase";
  
  const googleProvider = new GoogleAuthProvider();
  
  export const signUpWithEmailAndPassword = async (name, email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      await createUserProfile(user.uid, {
        name,
        email,
        profilePicture: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=F4A9A8&color=3E3E3E&size=200`,
        pomodorosCompleted: 0,
        roomsJoined: 0,
        createdAt: new Date()
      });
      
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  export const signInWithEmailAndPassword_ = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  export const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      
      const userDoc = await getDoc(doc(db, "users", user.uid));
      
      if (!userDoc.exists()) {
        await createUserProfile(user.uid, {
          name: user.displayName,
          email: user.email,
          profilePicture: user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName)}&background=F4A9A8&color=3E3E3E&size=200`,
          pomodorosCompleted: 0,
          roomsJoined: 0,
          createdAt: new Date()
        });
      }
      
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  export const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  export const createUserProfile = async (userId, userData) => {
    try {
      await setDoc(doc(db, "users", userId), userData);
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        unsubscribe();
        resolve(user);
      }, reject);
    });
  };
  
  export const onAuthStateChange = (callback) => {
    return onAuthStateChanged(auth, callback);
  };

  export const getAuthUser = () => {
    return auth.currentUser;
  };
  
  export const sendPasswordResetEmail = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return true;
    } catch (error) {
      throw new Error(error.message);
    }
  };