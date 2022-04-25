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

const LoginButton = styled(Button)({
  boxShadow: "none",
  fontSize: 20,
  backgroundColor: "primary.main",
  borderRadius: 20,
  flexGrow: 1,
});

export function Profile() {
  let navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
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
  const handleChangeProfile = () => {
    navigate("/");
  };
  return (
    <form onSubmit={handleChangeProfile}>
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
        <Typography variant="h4">Profile</Typography>
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
          id="password"
          label="Password"
          value={password}
          onChange={handleChangePassword}
          type="password"
        />
        <TextField
          fullWidth
          id="rePassword"
          label="Nhập lại Password"
          value={rePassword}
          onChange={handleChangeRePassword}
          type="password"
        />
        <LoginButton variant="contained" fullWidth type="submit">
          Thay đổi thông tin
        </LoginButton>
      </Container>
    </form>
  );
}
