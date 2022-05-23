import LockOpenIcon from "@mui/icons-material/LockOpen";
import {
  Avatar,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {authAPI, userAPI} from "../../api"
import { useAppDispatch } from "../../app/hooks";
import { userActions } from "./userSlice";

const LoginButton = styled(Button)({
  boxShadow: "none",
  fontSize: 20,
  backgroundColor: "primary.main",
  borderRadius: 20,
  flexGrow: 1,
});

export function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  const handleRegister = () => {
    navigate("/register");
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const resp = await authAPI.login({username: email, password: password})
    localStorage.setItem("token", resp.token);
    const info = await userAPI.getInfo(resp.id);
    dispatch(userActions.setUserInfo(info));
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
          <LockOpenIcon sx={{ color: "white" }} />
        </Avatar>
        <Typography variant="h4">Login</Typography>
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
        <LoginButton variant="contained" fullWidth type="submit">
          Đăng nhập
        </LoginButton>
        <Divider flexItem>Chưa có tài khoản?</Divider>
        <LoginButton
          variant="contained"
          fullWidth
          type="button"
          sx={{
            backgroundColor: "secondary.main",
            "&:hover": { backgroundColor: "secondary.light" },
          }}
          onClick={handleRegister}
        >
          Đăng ký
        </LoginButton>
      </Container>
    </form>
  );
}
