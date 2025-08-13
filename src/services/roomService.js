import {
    collection,
    doc,
    addDoc,
    getDoc,
    updateDoc,
    deleteDoc,
    onSnapshot,
    query,
    where,
    arrayUnion,
    arrayRemove,
    increment,
    serverTimestamp
  } from "firebase/firestore";
  import { db } from "./firebase";
  
  export const generateRoomCode = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  };
  
  export const createRoom = async (roomName, hostId, hostName, hostProfilePicture) => {
    try {
      const roomCode = generateRoomCode();
      
      const roomData = {
        name: roomName,
        code: roomCode,
        hostId: hostId,
        participants: [{
          id: hostId,
          name: hostName,
          profilePicture: hostProfilePicture,
          joinedAt: new Date()
        }],
        timerState: {
          currentTime: 25 * 60,
          isRunning: false,
          isBreak: false,
          currentRound: 1,
          totalRounds: 4
        },
        sessionProgress: {
          focusCompleted: 0,
          totalFocus: 4,
          breaksCompleted: 0,
          totalTime: 0,
          startedAt: null
        },
        createdAt: serverTimestamp(),
        isActive: true
      };
      
      const docRef = await addDoc(collection(db, "rooms"), roomData);
      
      await updateDoc(doc(db, "users", hostId), {
        roomsJoined: increment(1)
      });
      
      return { id: docRef.id, ...roomData };
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  export const joinRoom = async (roomCode, userId, userName, userProfilePicture) => {
    try {
      const q = query(collection(db, "rooms"), where("code", "==", roomCode), where("isActive", "==", true));
      
      return new Promise((resolve, reject) => {
        const unsubscribe = onSnapshot(q, async (querySnapshot) => {
          if (querySnapshot.empty) {
            unsubscribe();
            reject(new Error("Room not found"));
            return;
          }
          
          const roomDoc = querySnapshot.docs[0];
          const roomData = roomDoc.data();
          
          if (roomData.participants.some(p => p.id === userId)) {
            unsubscribe();
            resolve({ id: roomDoc.id, ...roomData });
            return;
          }
          
          if (roomData.participants.length >= 8) {
            unsubscribe();
            reject(new Error("Room is full"));
            return;
          }
          
          const newParticipant = {
            id: userId,
            name: userName,
            profilePicture: userProfilePicture,
            joinedAt: new Date()
          };
          
          await updateDoc(roomDoc.ref, {
            participants: arrayUnion(newParticipant)
          });
          
          await updateDoc(doc(db, "users", userId), {
            roomsJoined: increment(1)
          });
          
          unsubscribe();
          resolve({ id: roomDoc.id, ...roomData, participants: [...roomData.participants, newParticipant] });
        });
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  export const leaveRoom = async (roomId, userId) => {
    try {
      const roomRef = doc(db, "rooms", roomId);
      const roomDoc = await getDoc(roomRef);
      
      if (!roomDoc.exists()) {
        throw new Error("Room not found");
      }
      
      const roomData = roomDoc.data();
      const userParticipant = roomData.participants.find(p => p.id === userId);
      
      if (!userParticipant) {
        throw new Error("User not in room");
      }
      
      await updateDoc(roomRef, {
        participants: arrayRemove(userParticipant)
      });
      
      if (roomData.hostId === userId) {
        if (roomData.participants.length > 1) {
          const newHost = roomData.participants.find(p => p.id !== userId);
          await updateDoc(roomRef, {
            hostId: newHost.id
          });
        } else {
          await updateDoc(roomRef, {
            isActive: false
          });
        }
      }
      
      if (roomData.participants.length <= 1) {
        await updateDoc(roomRef, {
          isActive: false
        });
      }
      
      return true;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  export const updateTimerState = async (roomId, timerState) => {
    try {
      await updateDoc(doc(db, "rooms", roomId), {
        timerState: timerState,
        lastUpdated: serverTimestamp()
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  export const updateSessionProgress = async (roomId, sessionProgress) => {
    try {
      await updateDoc(doc(db, "rooms", roomId), {
        sessionProgress: sessionProgress
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  export const incrementPomodoroCount = async (userId) => {
    try {
      await updateDoc(doc(db, "users", userId), {
        pomodorosCompleted: increment(1)
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  export const listenToRoom = (roomId, callback) => {
    const roomRef = doc(db, "rooms", roomId);
    return onSnapshot(roomRef, (doc) => {
      if (doc.exists()) {
        callback({ id: doc.id, ...doc.data() });
      } else {
        callback(null);
      }
    });
  };
  
  export const getRoomByCode = async (roomCode) => {
    try {
      const q = query(collection(db, "rooms"), where("code", "==", roomCode), where("isActive", "==", true));
      
      return new Promise((resolve, reject) => {
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          unsubscribe();
          if (querySnapshot.empty) {
            resolve(null);
          } else {
            const roomDoc = querySnapshot.docs[0];
            resolve({ id: roomDoc.id, ...roomDoc.data() });
          }
        });
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  export const getRandomQuote = () => {
    const quotes = [
      "Ready to focus",
      "In the zone",
      "Let's be productive",
      "Focus mode activated",
      "Time to get things done",
      "Staying motivated",
      "Deep work mode",
      "Crushing goals today",
      "Focused and determined",
      "Making progress"
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  };