import { auth, provider } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();

  const authWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    const authInfo = {
      userID: result.user.uid,
      name: result.user.displayName,
      profilePhoto: result.user.photoURL,
      isAuth: true,
    };

    localStorage.setItem("auth", JSON.stringify(authInfo));
  };

  return (
    <div>
      <button onClick={authWithGoogle}>Google</button>
    </div>
  );
}

export default Auth;
