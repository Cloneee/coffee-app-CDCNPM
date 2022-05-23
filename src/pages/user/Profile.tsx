import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userAPI } from "../../api";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { IUserInfo } from "../../models";
import { fetchUserInfo, userActions } from "./userSlice";

const LoginButton = styled(Button)({
  boxShadow: "none",
  fontSize: 20,
  backgroundColor: "primary.main",
  borderRadius: 20,
  flexGrow: 1,
});

export function Profile() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user.info);
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const handleClose = () =>{
    setOpen(false);
  }
  useEffect(() => {
    setEmail(user.email);
    setName(user.name);
    setAddress(user.address);
    setPhone(user.phone);
  }, [])

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  const handleChangeRePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRePassword(e.currentTarget.value);
  };
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };
  const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.currentTarget.value);
  };
  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.currentTarget.value);
  }
  const handleChangeProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const id = user.customerId;
    const result = userAPI.changeInfo({
      customerId: id,
      name: name,
      address: address,
      phone: phone,
      email: email,
    } as IUserInfo)
    result.then((resp)=>{
      dispatch(userActions.setUserInfo(resp))
      setPassword("");
      setRePassword("");
      setOpen(true);
    })
    .catch((err)=>{
      console.log(err)
    })
  };
  const handleChangePasswordBtnClick = () =>{
    navigate("/change-password")
  }
  return (
    <>
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
          <TextField
            fullWidth
            id="email"
            label="Email"
            value={email}
            disabled
          />
          <TextField
            fullWidth
            id="name"
            label="Name"
            value={name}
            onChange={handleChangeName}
          />
          <TextField
            fullWidth
            id="phone"
            label="Phone"
            value={phone}
            onChange={handleChangePhone}
          />
          <TextField
            fullWidth
            id="address"
            label="Địa chỉ"
            value={address}
            onChange={handleChangeAddress}
            type="text"
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
            id="rePassword"
            label="Nhập lại Password"
            value={rePassword}
            onChange={handleChangeRePassword}
            type="password"
          />
          <LoginButton
            variant="contained"
            fullWidth
            type="submit"
            disabled={
              password !== rePassword ||
              password.length === 0
            }
          >
            Thay đổi thông tin
          </LoginButton>
          <Divider>Hoặc</Divider>
          <LoginButton
            variant="contained"
            fullWidth
            type="button"
            onClick={handleChangePasswordBtnClick}
            color="secondary"
          >
            Thay đổi mật khẩu
          </LoginButton>
        </Container>
      </form>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Thay đổi thông tin thành công
        </Alert>
      </Snackbar>
    </>
  );
}
