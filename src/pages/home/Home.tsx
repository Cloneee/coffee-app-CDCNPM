// import React, { useState } from "react";

import CoffeeIcon from "@mui/icons-material/Coffee";
import SearchIcon from "@mui/icons-material/Search";
import {
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import { Item } from "../../components/Item";
const style = {
  button: { display: "flex", flexDirection: "column" },
};

const example = [
  {
    name: "Coffee",
    price: 27000,
    id: "abcxyz"
  },
  {
    name: "Tea",
    price: 27000,
    id: "abcxyz"
  },
  {
    name: "Bear",
    price: 27000,
    id: "abcxyz"
  },
  {
    name: "Coffee",
    price: 27000,
    id: "abcxyz"
  },
  {
    name: "Tea",
    price: 27000,
    id: "abcxyz"
  },
  {
    name: "Bear",
    price: 27000,
    id: "abcxyz"
  },
  {
    name: "Coffee",
    price: 27000,
    id: "abcxyz"
  },
  {
    name: "Tea",
    price: 27000,
    id: "abcxyz"
  },
  {
    name: "Bear",
    price: 27000,
    id: "abcxyz"
  },
  {
    name: "Coffee",
    price: 27000,
    id: "abcxyz"
  },
  {
    name: "Tea",
    price: 27000,
    id: "abcxyz"
  },
  {
    name: "Bear",
    price: 27000,
    id: "abcxyz"
  },
];

export function Home() {
  return (
    <Container maxWidth="lg">
      {/* Search  */}
      <Box sx={{ mt: "5vh" }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", textTransform: "uppercase" }}
        >
          <CoffeeIcon sx={{ color: "primary.dark", mr: 1 }} />
          Đặt hàng ngay
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <SearchIcon sx={{ color: "primary.dark" }} />
          </IconButton>
        </Typography>
      </Box>
      {/* Category */}
      <Box sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}>
        <Button sx={style.button}>
          <Avatar
            alt="coffee"
            src="https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/ca-phe.png"
            sx={{ width: 86, height: 86 }}
          />
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            Coffee
          </Typography>
        </Button>
        <Button sx={style.button}>
          <Avatar
            alt="tea"
            src="https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/tra-trai-cay-tra-sua.png"
            sx={{ width: 86, height: 86 }}
          />
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            Milk Tea
          </Typography>
        </Button>
        <Button sx={style.button}>
          <Avatar
            alt="hi-tea"
            src="https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/hi-tea.png"
            sx={{ width: 86, height: 86 }}
          />
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            Fruit Tea
          </Typography>
        </Button>
        <Button sx={style.button}>
          <Avatar
            alt="ice"
            src="https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/da-xa.png"
            sx={{ width: 86, height: 86 }}
          />
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            Blending
          </Typography>
        </Button>
        <Button sx={style.button}>
          <Avatar
            alt="packed"
            src="https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/ca-phe-goi-ca-phe-uong-lien.png"
            sx={{ width: 86, height: 86 }}
          />
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            Packed
          </Typography>
        </Button>
        <Button sx={style.button}>
          <Avatar
            alt="snack"
            src="https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/banh-snack.png"
            sx={{ width: 86, height: 86 }}
          />
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            Snack
          </Typography>
        </Button>
      </Box>
      {/* List items  */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          rowGap: 3,
          columnGap: 2
        }}
      >
        {example.map((el, id) => {
          return <Item props={el} key={id} />;
        })}
      </Box>
    </Container>
  );
}
