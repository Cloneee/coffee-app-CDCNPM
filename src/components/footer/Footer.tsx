import { Box } from "@mui/material";
// import React, { useState } from "react";
import { Typography } from "@mui/material";

export function Footer() {
  return (
    <Box sx={{ flexGrow: 1, minHeight: "12vh", backgroundColor: "#202124", mt: 2 }}>
      <Box sx={{ display: "flex" }}>
        <Typography
          variant="h5"
          sx={{ color: "white", p: 3, minWidth: "10vw" }}
        >
          The Coffee Home
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "space-around",
            p: 3,
          }}
        >
          <Box sx={{ px: 1 }}>
            <Typography variant="h5" sx={{ color: "white" }}>
              Thông tin website
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "white" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              sunt quas minus maiores maxime, facere, qui nihil ex deleniti
              doloribus in excepturi suscipit laboriosam asperiores blanditiis
              perferendis velit vero quo!
            </Typography>
          </Box>
          <Box sx={{ px: 1 }}>
            <Typography variant="h5" sx={{ color: "white" }}>
              Điều khoản
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "white" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              sunt quas minus maiores maxime, facere, qui nihil ex deleniti
              doloribus in excepturi suscipit laboriosam asperiores blanditiis
              perferendis velit vero quo!
            </Typography>
          </Box>
          <Box sx={{ px: 1 }}>
            <Typography variant="h5" sx={{ color: "white" }}>
              Liên hệ
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "white" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              sunt quas minus maiores maxime, facere, qui nihil ex deleniti
              doloribus in excepturi suscipit laboriosam asperiores blanditiis
              perferendis velit vero quo!
            </Typography>
          </Box>
        </Box>
      </Box>
      <Typography
          variant="subtitle2"
          sx={{ color: "white", pt: 2, ml: "auto", textAlign: "right", pr: 2 }}
        >
          Copyright © 2022 TDTU. All rights reserved.
        </Typography>
    </Box>
  );
}
