import { Box, Container, Typography } from "@mui/material";

export function Error() {
  return (
    <Container maxWidth="md">
      <Box sx={{mt: 5, display: "flex", justifyContent: "center", mb: "60vh"}}>
        <Typography variant="h2" sx={{ textTransform: "uppercase" }}>
          404 page not found
        </Typography>
      </Box>
    </Container>
  );
}
