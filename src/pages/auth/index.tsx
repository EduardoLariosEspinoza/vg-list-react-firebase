import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { auth, provider } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function Auth() {
  const [showPassword, setShowPassword] = useState(false);
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

  const handleClickShowPassword = () => setShowPassword((show) => !show);

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
        backgroundImage:
          "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Stack alignItems="center">
        <Typography
          variant="h1"
          sx={{ m: 5, alignItems: "center", color: "primary.main" }}
        >
          MyVGList
        </Typography>

        <Typography
          variant="subtitle1"
          component="p"
          sx={{ m: 5, maxWidth: 400, alignItems: "center" }}
        >
          Select and save your games collection and save your progress.
        </Typography>
      </Stack>

      <Paper elevation={3} sx={{ p: 5, m: 5, width: { xs: "60%", md: "30%" } }}>
        <Stack spacing={4} sx={{ alignItems: "center" }}>
          <Typography variant="h4">Welcome to MyVGList</Typography>

          <Box sx={{ width: "100%" }}>
            <FormControl
              variant="outlined"
              sx={{
                width: "100%",
                alignItems: "left",
                gap: 1,
              }}
            >
              <FormLabel htmlFor="email">
                <Typography
                  variant="body2"
                  sx={{ color: "text.primary", textAlign: "left" }}
                >
                  Email
                </Typography>
              </FormLabel>
              <TextField
                placeholder="Type your email"
                id="email"
                type="email"
                name="email"
                required
                fullWidth
                size="small"
                sx={{ "& input::placeholder": { fontSize: "0.875rem" } }}
              />
            </FormControl>

            <FormControl fullWidth sx={{ mt: 3, gap: 1 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <FormLabel htmlFor="password">
                  <Typography
                    variant="body2"
                    sx={{ color: "text.primary", textAlign: "left" }}
                  >
                    Password
                  </Typography>
                </FormLabel>

                <Link
                  component="button"
                  type="button"
                  underline="hover"
                  variant="body2"
                >
                  Forgot your password?
                </Link>
              </Box>

              <TextField
                placeholder="Type your password"
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                required
                fullWidth
                size="small"
                sx={{ "& input::placeholder": { fontSize: "0.875rem" } }}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showPassword
                              ? "Hide the password"
                              : "Display the password"
                          }
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </FormControl>
          </Box>
        </Stack>
      </Paper>
    </Stack>
  );
}

export default Auth;
