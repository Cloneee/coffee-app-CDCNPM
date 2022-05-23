import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, IconButton, Typography } from "@mui/material";

import { cartActions } from "../cartSlice";
import numb2Money from "../../../app/formatMoney";
import { useAppDispatch } from "../../../app/hooks";

export function CartItem(props: any) {
  const dispatch = useAppDispatch();
  const handleIncrease = () => {
    dispatch(cartActions.increaseCartItemCount(props.cartItem.productId));
  };
  const handleDecrease = () => {
    dispatch(cartActions.decreaseCartItemCount(props.cartItem.productId));
  };
  const handleDelete = () =>{
    dispatch(cartActions.deleteCartItem(props.cartItem.productId));
  }

  return (
    <Box sx={{ display: "flex", mt: 2, alignItems: "center" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          onClick={handleDecrease}
          disabled={props.cartItem.quantity > 1 ? false : true}
        >
          <RemoveIcon
            color={props.cartItem.quantity === 1 ? "disabled" : "primary"}
          />
        </IconButton>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          {props.cartItem.quantity}
        </Typography>
        <IconButton onClick={handleIncrease}>
          <AddIcon color="primary" />
        </IconButton>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          {props.cartItem.name}
        </Typography>
      </Box>
      <Typography>{numb2Money(props.cartItem.price * props.cartItem.quantity)}</Typography>
      <IconButton onClick={handleDelete}>
        <DeleteIcon sx={{ color: "error.main" }} />
      </IconButton>
    </Box>
  );
}
