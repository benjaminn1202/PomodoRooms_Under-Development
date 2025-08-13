import { doc, getDoc, updateDoc, onSnapshot } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "./firebase";

export const getUserProfile = async (userId) => {
  try {
    const userDoc = await getDoc(doc(db, "users", userId));
    if (userDoc.exists()) {
      return { id: userDoc.id, ...userDoc.data() };
    } else {
      throw new Error("User profile not found");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateUserProfile = async (userId, updates) => {
  try {
    const updateData = {
      ...updates,
      updatedAt: new Date()
    };
    
    await updateDoc(doc(db, "users", userId), updateData);
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateProfilePicture = async (userId, profilePictureUrl) => {
  try {
    await updateDoc(doc(db, "users", userId), {
      profilePicture: profilePictureUrl,
      updatedAt: new Date()
    });
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const generateAvatarUrl = (name) => {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=F4A9A8&color=3E3E3E&size=200`;
};

export const listenToUserProfile = (userId, callback) => {
  const userRef = doc(db, "users", userId);
  return onSnapshot(userRef, (doc) => {
    if (doc.exists()) {
      callback({ id: doc.id, ...doc.data() });
    } else {
      callback(null);
    }
  });
};