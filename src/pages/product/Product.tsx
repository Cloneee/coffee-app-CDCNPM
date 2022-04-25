import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Image from "material-ui-image";
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
import React, { useState } from "react";
import { useParams } from "react-router-dom";

var formatter = new Intl.NumberFormat("vi-VI", {
  style: "currency",
  currency: "VND",
});

const ThanhToanButton = styled(Button)({
  boxShadow: "none",
  fontSize: 20,
  backgroundColor: "primary.main",
  borderRadius: 20,
  flexGrow: 1,
});

export function Product() {
  let { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    setQuantity(quantity - 1);
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
            <Image src="https://minio.thecoffeehouse.com/image/admin/1639377738_ca-phe-sua-da.jpg"/>
            <CardContent>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                omnis deserunt atque fugiat? Tempora hic mollitia id quo ut unde
                iste minus cupiditate iure placeat iusto, nobis, officia nulla
                facilis.
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ flexGrow: 1, flexBasis: 0, pr: 2, mx: 1 }}>
          <Typography variant="h4">{id}</Typography>
          <Box sx={{ display: "flex" }}>
            <Typography variant="h5" sx={{ flexGrow: 1, py: 1 }}>
              {formatter.format(29000)}
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
            <ThanhToanButton variant="contained">
              Thêm vào giỏ hàng
            </ThanhToanButton>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
