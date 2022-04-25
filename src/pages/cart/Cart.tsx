import { Box, Button, Container, Divider, Typography } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { CartItem } from "./components/CartItem";

export function Cart() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <LocalMallIcon sx={{ mr: 2, color: "primary.dark" }} />
        <Typography variant="h4">Xác nhận đơn hàng</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 5, width: "100%", mt: 3 }}>
        <Box sx={{ flexGrow: 2, p: 2 }}>
          <Box sx={{display: "flex"}}>
            <Typography variant="h6">
              Giao hàng
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            boxShadow: "0 -4px 10px rgb(0 0 0 / 12%)",
            borderRadius: 5,
          }}
        >
          <Box sx={{ p: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", pb: 2 }}>
              <Typography sx={{ flexGrow: 1, fontWeight: 600 }}>
                Các món đã chọn
              </Typography>
              <Button variant="contained" sx={{ borderRadius: 6 }}>
                Thêm món
              </Button>
            </Box>
            <Divider></Divider>
            <CartItem />
          </Box>
          <Box sx={{ backgroundColor: "primary.main", display: "flex" }}>
            <Box sx={{ display: "flex", gap: 2, flexGrow: 1, p: 2, color: "white" }}>
              <Typography variant="h6">Thành tiền</Typography>
              <Typography variant="h6">1000000</Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                my: 2,
                mr: 2,
                backgroundColor: "background.paper",
                borderRadius: 6,
                "&:hover": {
                  backgroundColor: "background.paper",
                  color: "primary.dark",
                },
              }}
            >
              Thanh toán
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
