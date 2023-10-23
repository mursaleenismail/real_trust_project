"use client";
import React from "react";
import {
  Grid,
  CardContent,
  Button,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import {
  CBox1,
  ImageBox,
  LeftCard,
  MainImage,
  RenderFoodStack,
} from "./Styled";
import Form from "@/components/Form/Form";
import BGM from "../../../../public/HomeHero/BGImage.png";


const HomeHero = () => {
  return (
    <Box
    sx={{
      width: "100vw", 
      height: "100vh", 
      flexShrink: "0px",
      backgroundImage: `url(${BGM.src})`,
      backdropFilter: "blur(5px)",
      backgroundSize: "cover",
    }}
    >
      <Box sx={{ padding: "2% 1% 5% 5%" }}>
        <Grid container>
        <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
            <LeftCard sx={{ backgroundColor: "transparent", padding:"25% 1%"}} elevation={0}>
              <CardContent>
                <Typography
                  sx={{ fontWeight:800, padding: "40px 30px",color:"white  " }}
                  variant="h2"
                >
                  Consultation,
                  <br /> Design,
                  <br /> & Marketing
                </Typography>
              </CardContent>
            </LeftCard>
          </Grid>

          <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
            <Box sx={{padding:"1% 10%",display:{sm:"block",xs:"none"}}}>
            <Form />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}; <Grid item xl={5} lg={5} md={5} sm={12} xs={12}></Grid>

export default HomeHero;
