import Image from 'material-ui-image';
import { useNavigate } from 'react-router-dom';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';

let formatter = new Intl.NumberFormat("vi-VI", {
  style: "currency",
  currency: "VND",
});

export function Item(data: any) {
  let navigate = useNavigate();
  const handleClick = (e: React.MouseEvent) => {
    navigate("/product/" + data.props.id);
  };

  return (
    <Card
      sx={{
        maxWidth: 200,
        px: 1,
        "box-shadow": "0px 10px 20px rgba(0,0,0,0.1)",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <CardContent sx={{ p: 1 }}>
        <Image src="https://minio.thecoffeehouse.com/image/admin/1639377738_ca-phe-sua-da_400x400.jpg" style={{"width": "125px"}}/>
        <Typography variant="body1" sx={{mt: 1, fontWeight: 500}}>
          {data.props.name}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body2" color="text.secondary">
          {formatter.format(data.props.price)}
        </Typography>
        <IconButton color="primary" sx={{ pr: 0 }}>
          <AddCircleIcon fontSize="inherit" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
