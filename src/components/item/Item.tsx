import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

var formatter = new Intl.NumberFormat('vi-VI', {
  style: 'currency',
  currency: 'VND',
});


export function Item(props: any) {
  return (
    <Card
      sx={{
        maxWidth: 150,
        px: 1,
        mt: 2,
        mx: 2,
        "box-shadow": "0px 10px 20px rgba(0,0,0,0.1)",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image="https://minio.thecoffeehouse.com/image/admin/1639377738_ca-phe-sua-da_400x400.jpg"
        alt="Coffee"
      />
      <CardContent sx={{ p: 1}}>
        <Typography gutterBottom variant="h6" component="div">
          {props.props.name}
        </Typography>
      </CardContent>
      <CardActions sx={{display: "flex", justifyContent: "space-between"}}>
        <Typography variant="body2" color="text.secondary">
          {formatter.format(props.props.price)}
        </Typography>
        <IconButton color="primary" size="large">
          <AddCircleIcon fontSize="inherit"/>
        </IconButton>
      </CardActions>
    </Card>
  );
}
