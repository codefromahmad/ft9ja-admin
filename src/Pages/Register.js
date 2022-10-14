import React from "react";
import axios from "../axios";
import { useNavigate, Link } from "react-router-dom";
import {
  Box,
  OutlinedInput,
  InputLabel,
  FormControl,
  Button,
  Typography,
  FormHelperText,
} from "@mui/material";
function Register() {
  let navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password1, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [broker, setBroker] = React.useState("");
  const [acc_size, setAccsize] = React.useState("");
  const [payout, setPayout] = React.useState("");
  const [error, setError] = React.useState("");
  const [referral_code, setReferral] = React.useState("");

  let handleRegister = (e) => {
    e.preventDefault();
    if (password1 !== password2) {
      setError("Passwords do not match");
    } else {
      axios
        .post("/auth/registration/", {
          email,
          password1,
          firstname,
          lastname,
          phone,
          broker,
          acc_size,
          payout,
          password2,
          referral_code,
        })
        .then((res) => {
          console.log(res);
          localStorage.setItem("access_token", res.data.access_token);
          localStorage.setItem("refresh_token", res.data.refresh_token);
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${localStorage.getItem("access_token")}`;
          navigate("/dashboards");
        })
        .catch((err) => {
          console.log(err.response.data);
          setError("Invalid Email or Password");
        });
    }
  };
  return (
    <div>
      <Box
        component={"form"}
        display={"flex"}
        flexDirection={"column"}
        onSubmit={handleRegister}
        maxWidth={290}
        margin={"auto"}
        bgcolor={"white"}
        sx={{
          "& > :not(style)": { m: 1 },
        }}
      >
        <FormControl margin={"normal"}>
          <InputLabel htmlFor="component-outlined">firstname</InputLabel>
          <OutlinedInput
            type={"name"}
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            name={"firstname"}
            sx={{
              height: 50,
            }}
          />
        </FormControl>
        <FormControl margin={"normal"}>
          <InputLabel htmlFor="component-outlined">lastname</InputLabel>
          <OutlinedInput
            type={"name"}
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            name={"lastname"}
            sx={{
              height: 50,
            }}
          />
        </FormControl>

        <FormControl margin={"normal"}>
          <InputLabel htmlFor="component-outlined">Email</InputLabel>
          <OutlinedInput
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name={"email"}
            sx={{
              height: 50,
            }}
          />
        </FormControl>
        <FormControl margin={"normal"}>
          <InputLabel htmlFor="component-outlined">phone</InputLabel>
          <OutlinedInput
            type={"phone"}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name={"phone"}
            sx={{
              height: 50,
            }}
          />
        </FormControl>
        <FormControl margin={"normal"}>
          <InputLabel htmlFor="component-outlined">Broker</InputLabel>
          <OutlinedInput
            type={"broker"}
            value={broker}
            onChange={(e) => setBroker(e.target.value)}
            name={"broker"}
            sx={{
              height: 50,
            }}
          />
        </FormControl>
        <FormControl margin={"normal"}>
          <InputLabel htmlFor="component-outlined">Account Size</InputLabel>
          <OutlinedInput
            type={"accsize"}
            value={acc_size}
            onChange={(e) => setAccsize(e.target.value)}
            name={"accsize"}
            sx={{
              height: 50,
            }}
          />
        </FormControl>
        <FormControl margin={"normal"}>
          <InputLabel htmlFor="component-outlined">Payout</InputLabel>
          <OutlinedInput
            type={"payout"}
            value={payout}
            onChange={(e) => setPayout(e.target.value)}
            name={"payout"}
            sx={{
              height: 50,
            }}
          />
        </FormControl>
        <FormControl margin={"normal"}>
          <InputLabel htmlFor="component-outlined">Referral</InputLabel>
          <OutlinedInput
            type={"referral_code"}
            value={referral_code}
            onChange={(e) => setReferral(e.target.value)}
            name={"referral_code"}
            sx={{
              height: 50,
            }}
          />
        </FormControl>
        <FormControl margin={"normal"}>
          <InputLabel htmlFor="component-outlined">Password</InputLabel>
          <OutlinedInput
            type={"password"}
            value={password1}
            onChange={(e) => setPassword(e.target.value)}
            name={"password"}
            sx={{
              height: 50,
            }}
          />
        </FormControl>

        <FormControl margin={"normal"}>
          <InputLabel htmlFor="component-outlined">Re-Password</InputLabel>
          <OutlinedInput
            type={"password"}
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            name={"password2"}
            sx={{
              height: 50,
            }}
          />
          <FormHelperText id="component-helper-text">
            {error ? error : null}
          </FormHelperText>
        </FormControl>
        <Button
          style={{ marginTop: "30px" }}
          variant="contained"
          type={"submit"}
        >
          Register
        </Button>
        <Typography variant="body2" color="error">
          Already have an account? <Link to="/login">Login</Link>
        </Typography>
      </Box>
    </div>
  );
}

export default Register;
