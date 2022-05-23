import Image from "material-ui-image";
import { useNavigate } from "react-router-dom";

import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Box, Button, Container, Divider, Typography } from "@mui/material";

import numb2Money from "../../app/formatMoney";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { CartItem } from "./components/CartItem";
import { productAPI } from "../../api";
import { IOrderRequest } from "../../models";
import { cartActions } from "./cartSlice";

export function Cart() {
  const user = useAppSelector((state) => state.user.info);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleThemMon = () => {
    navigate("/");
  };
  const cartItems = useAppSelector((state) => state.cart.listItems);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
  const handleThanhToan = () => {
    const orderItems = cartItems.map((item) => {
      return {
        ProductId: item.productId,
        Quantity: item.quantity,
      };
    });
    const dataOrder = {
      CustomerId: user.customerId,
      Address: user.address,
      OrderItems: orderItems,
      TotalPrice: totalPrice,
    } as IOrderRequest;
    const resp = productAPI.createOrder(dataOrder);
    resp.then(() => {
      dispatch(cartActions.resetCart());
    });
  };
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 10,
        mb: 40,
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
        <Box sx={{ flexGrow: 1, p: 2 }}>
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6" sx={{ borderBottom: "3px solid #feaa39" }}>
              Giao hàng
            </Typography>
          </Box>
          <Box sx={{ display: "flex", py: 2 }}>
            <Box sx={{ minWidth: 50, mr: 3 }}>
              <Image src="https://minio.thecoffeehouse.com/images/tch-web-order/Delivery2.png" />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Họ tên:{" "}
                </Typography>
                <Typography>{user.name}</Typography>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Số điện thoại:{" "}
                </Typography>
                <Typography>{user.phone}</Typography>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Địa chỉ:{" "}
                </Typography>
                <Typography>{user.address}</Typography>
              </Box>
            </Box>
          </Box>
          <Divider></Divider>
          <Box sx={{ py: 2, display: "flex" }}>
            <Box>
              <Typography
                variant="h6"
                sx={{ borderBottom: "3px solid #feaa39" }}
              >
                Phương thức thanh toán
              </Typography>
            </Box>
            <Box></Box>
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
              <Button
                variant="contained"
                sx={{ borderRadius: 6 }}
                onClick={handleThemMon}
              >
                Thêm món
              </Button>
            </Box>
            <Divider></Divider>
            <Box sx={{ minHeight: 250 }}>
              {cartItems.map((cartItem) => (
                <CartItem key={cartItem.productId} cartItem={cartItem} />
              ))}
            </Box>
          </Box>
          <Box sx={{ backgroundColor: "primary.main", display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexGrow: 1,
                p: 2,
                color: "white",
              }}
            >
              <Typography variant="h6">Thành tiền</Typography>
              <Typography variant="h6">{numb2Money(totalPrice)}</Typography>
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
              onClick={handleThanhToan}
            >
              Thanh toán
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
