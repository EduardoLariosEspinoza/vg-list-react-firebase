import { Box, Paper, Stack, Typography } from "@mui/material";
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

  // Separate info and auth card into two different components
  return (
    <Stack
      sx={{
        height: "90vh",
        width: "100vw",
        flexDirection: { sx: "column", md: "row" },
        justifyContent: { sx: "center", md: "space-around" },
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Stack alignItems="center">
        <Typography
          variant="h3"
          component="h1"
          sx={{ m: 5, alignItems: "center" }}
        >
          MyVGList
        </Typography>

        <Typography
          variant="h5"
          component="p"
          sx={{ m: 5, maxWidth: 400, alignItems: "center" }}
        >
          Select and save your games collection and save your progress.
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
