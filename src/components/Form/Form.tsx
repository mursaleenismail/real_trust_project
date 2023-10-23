"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Form = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "3px solid #FFF",
          width: "75%",
          backgroundColor: "rgba(25, 42, 104, 0.75)",
          borderRadius: "8px",
          padding: "0px 30px",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Typography
          sx={{
            margin: " 30px 13px",
            fontSize: "32px",
            fontWeight: 600,
            textAlign: "center",
            color: "#FFFFFF",
            lineHeight: "36px",
          }}
          component="h1"
          variant="h5"
        >
          Get a Free <br /> Consultation
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            sx={{
              border: "1px solid #FFFF ",
            }}
            margin="normal"
            required
            fullWidth
            placeholder="Full Name"
            inputProps={{
              style: { color: "#FFFF " },
            }}
          />
          <TextField
            sx={{
              border: "1px solid #FFFF ",
            }}
            margin="normal"
            required
            fullWidth
            id="email"
            placeholder="Enter Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            inputProps={{
              style: { color: "#FFFF " },
            }}
          />
          <TextField
            sx={{
              border: "1px solid #FFFF ",
            }}
            margin="normal"
            required
            fullWidth
            placeholder="Mobile Number"
            type="text"
            inputProps={{
              style: { color: "#FFFF " },
            }}
          />
          <TextField
            sx={{
              border: "1px solid #FFFF ",
            }}
            margin="normal"
            required
            fullWidth
            placeholder="Area, City"
            type="text"
            inputProps={{
              style: { color: "#FFFF " },
            }}
          />
          <Button
            type="submit"
            fullWidth
            sx={{
              bgcolor: "#F46D21",
              padding: "20px 40px",
              mt: 3,
              mb: 2,
              borderRadius: "10px",
              color: "white",
              "&:hover": {
                backgroundColor: "#F46D21",
                fontSize: 15,
              },
            }}
          >
            {" "}
            Get Quick Quote
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
