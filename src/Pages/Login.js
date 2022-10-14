import React, { useContext } from "react";
import {
  Box,
  Button,
  OutlinedInput,
  InputLabel,
  FormControl,
  Typography,
  FormHelperText,
  CircularProgress,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import axios from "../axios";
import axiosInstance from "../axios";
import { AuthContext } from "../Context/AuthContext";
function Login() {
  const {
    loading,
    setLoading,
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleuserLogin,
  } = useContext(AuthContext);
  // const [loadingspin, setLoadingspin] = React.useState(false);

  return (
    <div>
      <Box component="form" onSubmit={handleuserLogin}>
        <FormControl margin={"normal"}>
          <InputLabel htmlFor="component-outlined">Email</InputLabel>
          <OutlinedInput
            type={"email"}
            // labelText={"Email" }
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name={"email"}
            sx={{
              height: 50,
            }}
          />
        </FormControl>

        <FormControl margin={"normal"}>
          <InputLabel htmlFor="component-outlined">Password</InputLabel>
          <OutlinedInput
            type={"password"}
            sx={{
              height: 50,
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name={"password"}
          />
        </FormControl>

        <Button
          style={{ marginTop: "30px" }}
          variant="contained"
          type={"submit"}
          onClick={() => setLoading(true)}
          endIcon={
            loading && (
              <CircularProgress
                size={12}
                sx={{
                  zIndex: 1,
                  color: "white",
                }}
              />
            )
          }
        >
          Login
        </Button>
        <FormHelperText id="component-helper-text">
          {error ? error : null}
        </FormHelperText>

        <Typography variant="body2" color="error">
          Dont have an account? <Link to="/register">Register</Link>
        </Typography>
      </Box>
    </div>
  );
}

export default Login;
