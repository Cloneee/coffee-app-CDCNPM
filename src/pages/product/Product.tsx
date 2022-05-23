import Image from "material-ui-image";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import { productAPI } from "../../api";
import { cartActions } from "../cart/cartSlice";
import numb2Money from "../../app/formatMoney";
import { useAppDispatch } from "../../app/hooks";
import { ICartItem, IProduct } from "../../models";

const ThanhToanButton = styled(Button)({
  boxShadow: "none",
  fontSize: 20,
  backgroundColor: "primary.main",
  borderRadius: 20,
  flexGrow: 1,
});

export function Product() {
  let { id } = useParams();
  const [product, setProduct] = useState({} as IProduct);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    (async () => {
      let data = await productAPI.getById(id || "");
      setProduct(data);
    })();
  }, []);
  const dispatch = useAppDispatch();
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    setQuantity(quantity - 1);
  };
  const handleAddToCart = () => {
    dispatch(
      cartActions.addNewOrderItemToOrder({
        productId: product.productId,
        name: product.name,
        quantity: quantity,
        images: product.images,
        price: product.price,
      } as ICartItem)
    );
  };
  return (
    <Container maxWidth="lg" sx={{ mt: 10 }}>
      <Box
        sx={{
          "box-shadow": "0 10px 20px rgb(0 0 0 / 10%)",
          borderRadius: 2,
          display: "flex",
          py: 2,
        }}
      >
        <Box sx={{ flexGrow: 1, flexBasis: 0, px: 5, mx: 1 }}>
          <Card>
            <Image src={product.images} />
            <CardContent>
              <Typography variant="body1">{product.description}</Typography>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ flexGrow: 1, flexBasis: 0, pr: 2, mx: 1 }}>
          <Typography variant="h4">{product.name}</Typography>
          <Box sx={{ display: "flex" }}>
            <Typography variant="h5" sx={{ flexGrow: 1, py: 1 }}>
              {numb2Money(product.price * quantity)}
            </Typography>
            <IconButton
              onClick={handleDecrease}
              disabled={quantity <= 1 ? true : false}
              sx={{ color: "primary.dark" }}
            >
              <RemoveCircleIcon fontSize="large" />
            </IconButton>
            <Typography variant="h5" sx={{ p: 1 }}>
              {quantity}
            </Typography>
            <IconButton onClick={handleIncrease} sx={{ color: "primary.dark" }}>
              <AddCircleIcon fontSize="large" />
            </IconButton>
          </Box>
          <TextField fullWidth label="Ghi chú" id="note" sx={{ mt: 2 }} />
          <Box sx={{ display: "flex", mt: 3 }}>
            <ThanhToanButton variant="contained" onClick={handleAddToCart}>
              Thêm vào giỏ hàng
            </ThanhToanButton>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
function dispatch() {
  throw new Error("Function not implemented.");
}
