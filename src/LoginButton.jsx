import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";

function LoginButton() {
  const login = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    alert("Logged in!");
  };

  return <button onClick={login}>Login with Google</button>;
}

export default LoginButton;