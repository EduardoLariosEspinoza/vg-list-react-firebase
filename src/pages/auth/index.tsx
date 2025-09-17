import { Box, Card, Paper, Stack, Typography } from "@mui/material";
import { auth, provider } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

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

  // Separate info and auth card into two different components
  return (
    <Stack
      direction={{ sx: "column", md: "row" }}
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      <Stack>
        <Typography variant="h2" align="center" sx={{ m: 5 }}>
          MyVGList
        </Typography>
      </Stack>

      <Paper elevation={3} sx={{ p: 5, m: 5 }}>
        <Stack spacing={2} alignItems="center">
          <Typography variant="h4">Welcome to MyVGList</Typography>
          <Typography variant="subtitle1">
            Please sign in with your Google account to continue
          </Typography>
          <Box
            component="img"
            sx={{ height: 100, width: 100, cursor: "pointer" }}
            alt="Google Sign-In"
          />
        </Stack>
      </Paper>
    </Stack>
  );
}

export default Auth;
