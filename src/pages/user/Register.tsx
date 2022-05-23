import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {authAPI} from "../../api"

const LoginButton = styled(Button)({
  boxShadow: "none",
  fontSize: 20,
  backgroundColor: "primary.main",
  borderRadius: 20,
  flexGrow: 1,
});

export function Register() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  const handleChangeRePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRePassword(e.currentTarget.value);
  };
  const handleChangeFname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFname(e.currentTarget.value);
  };
  const handleChangeLname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLname(e.currentTarget.value);
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const resp = await authAPI.register({email: email, password: password, name: fname +" " + lname})
    
    localStorage.setItem("token", resp.token);
    const user = {
      name: resp.name
    };
    localStorage.setItem("infoUser", JSON.stringify(user));
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Container
        maxWidth="xs"
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          mb: 50,
        }}
      >
        <Avatar sx={{ backgroundColor: "secondary.main" }}>
          <LockOutlinedIcon sx={{ color: "white" }} />
        </Avatar>
        <Typography variant="h4">Register</Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            fullWidth
            id="fname"
            label="First Name"
            value={fname}
            onChange={handleChangeFname}
          />
          <TextField
            fullWidth
            id="lname"
            label="Last Name"
            value={lname}
            onChange={handleChangeLname}
          />
        </Box>
        <TextField
          fullWidth
          id="email"
          label="Email"
          value={email}
          onChange={handleChangeEmail}
          type="email"
        />
        <TextField
          fullWidth
          id="password"
          label="Password"
          value={password}
          onChange={handleChangePassword}
          type="password"
        />
        <TextField
          fullWidth
          id="password"
          label="RePassword"
          value={rePassword}
          onChange={handleChangeRePassword}
          type="password"
          error={password === rePassword ? false : true}
        />
        <LoginButton variant="contained" fullWidth type="submit" disabled={password === rePassword? false: true}>
          Đăng ký
        </LoginButton>
        <Divider flexItem>Đã có tài khoản?</Divider>
        <LoginButton
          variant="contained"
          fullWidth
          type="button"
          sx={{
            backgroundColor: "secondary.main",
            "&:hover": { backgroundColor: "secondary.light" },
          }}
          onClick={handleLogin}
        >
          Đăng nhập
        </LoginButton>
      </Container>
    </form>
  );
}
