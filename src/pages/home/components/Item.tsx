import Image from "material-ui-image";
import { useNavigate } from "react-router-dom";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import numb2Money from "../../../app/formatMoney";

export function Item(data: any) {
  let navigate = useNavigate();
  const handleClick = (e: React.MouseEvent) => {
    navigate("/product/" + data.props.productId);
  };

  return (
    <Card
      sx={{
        maxWidth: 200,
        px: 1,
        "box-shadow": "0px 10px 20px rgba(0,0,0,0.1)",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        minWidth: 200,
      }}
      onClick={handleClick}
    >
      <CardContent
        sx={{ p: 1, display: "flex", flexDirection: "column", flexGrow: 1 }}
      >
        <Image
          src={data.props.images}
          style={{ objectFit: "contain", minWidth: 100 }}
        />
      </CardContent>
      <CardActions sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="body1" sx={{ mt: 1, fontWeight: 500 }}>
          {data.props.name}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ flexGrow: 1 }}
          >
            {numb2Money(data.props.price)}
          </Typography>
          <IconButton color="primary" sx={{ pr: 0 }}>
            <AddCircleIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}
