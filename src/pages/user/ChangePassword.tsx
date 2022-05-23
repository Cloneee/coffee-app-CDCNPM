import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Alert,
  Avatar,
  Button,
  Container,
  Divider,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userAPI } from "../../api";
import { IPassword } from "../../models";

const LoginButton = styled(Button)({
  boxShadow: "none",
  fontSize: 20,
  backgroundColor: "primary.main",
  borderRadius: 20,
  flexGrow: 1,
});

export function ChangePassword() {
  const navigate = useNavigate();
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [reNewPass, setReNewPass] = useState("");
  const [open, setOpen] = useState(false);

  const handleChangeOldPass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOldPass(e.currentTarget.value);
  };
  const handleChangeNewPass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPass(e.currentTarget.value);
  };
  const handleChangeReNewPass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReNewPass(e.currentTarget.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = userAPI.changePassword({
      oldPassword: oldPass,
      newPassword: newPass,
    } as IPassword);
    result.then(() => {
      setOldPass("");
      setNewPass("");
      setReNewPass("");
      setOpen(true);
    })
    .catch((err)=>{
      console.log(err)
    });
  };
  const handleChangeProfileBtnClick = () => {
    navigate("/profile");
  };
  return (
    <>
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
          <Typography variant="h4">Đổi Mật Khẩu</Typography>
          <TextField
            fullWidth
            id="password"
            label="Mật khẩu cũ"
            value={oldPass}
            onChange={handleChangeOldPass}
            type="password"
          />
          <TextField
            fullWidth
            id="newPassword"
            label="Mật khẩu mới"
            value={newPass}
            onChange={handleChangeNewPass}
            type="password"
          />
          <TextField
            fullWidth
            id="reNewPassword"
            label="Nhập lại mật khẩu mới"
            value={reNewPass}
            onChange={handleChangeReNewPass}
            type="password"
          />
          <LoginButton
            variant="contained"
            fullWidth
            type="submit"
            disabled={
              newPass !== reNewPass ||
              oldPass.length === 0 ||
              newPass.length === 0
            }
          >
            Thay đổi mật khẩu
          </LoginButton>
          <Divider>Hoặc</Divider>
          <LoginButton
            variant="contained"
            fullWidth
            type="button"
            onClick={handleChangeProfileBtnClick}
            color="secondary"
          >
            Thay đổi thông tin
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
          Thay đổi mật khẩu thành công
        </Alert>
      </Snackbar>
    </>
  );
}
