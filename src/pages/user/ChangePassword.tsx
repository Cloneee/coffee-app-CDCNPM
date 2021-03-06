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
          <Typography variant="h4">?????i M???t Kh???u</Typography>
          <TextField
            fullWidth
            id="password"
            label="M???t kh???u c??"
            value={oldPass}
            onChange={handleChangeOldPass}
            type="password"
          />
          <TextField
            fullWidth
            id="newPassword"
            label="M???t kh???u m???i"
            value={newPass}
            onChange={handleChangeNewPass}
            type="password"
          />
          <TextField
            fullWidth
            id="reNewPassword"
            label="Nh???p l???i m???t kh???u m???i"
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
            Thay ?????i m???t kh???u
          </LoginButton>
          <Divider>Ho???c</Divider>
          <LoginButton
            variant="contained"
            fullWidth
            type="button"
            onClick={handleChangeProfileBtnClick}
            color="secondary"
          >
            Thay ?????i th??ng tin
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
          Thay ?????i m???t kh???u th??nh c??ng
        </Alert>
      </Snackbar>
    </>
  );
}
