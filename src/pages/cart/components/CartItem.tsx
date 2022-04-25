import { Box, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';

export function CartItem(data: any) {
  return (
    <Box sx={{ display: "flex", mt: 2, alignItems: "center" }}>
      <IconButton>
        <EditIcon sx={{ color: "primary.dark" }} />
      </IconButton>
      <Box sx={{flexGrow: 1}}>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          1 x Trà Đào Cam Xả
        </Typography>
      </Box>
      <Typography>51000</Typography>
      <IconButton>
        <DeleteIcon sx={{ color: "error.main" }} />
      </IconButton>
    </Box>
  );
}
