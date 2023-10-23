"use client";
import Box from "@mui/material/Box";
import React from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Home from "../../../../public/Choose/home.svg";
import Brush from "../../../../public/Choose/paintbrush-2.svg";
import Dollar from "../../../../public/Choose/circle-dollar-sign.svg";
import Rectangle from "../../../../public/Choose/Rectangle 51.png"
import CUCard from "@/components/CUCard/CUCard";
import { PCTypograpghy } from "./Styled";
import Image from "next/image";

const Choose = () => {
  return (
    <Box
      sx={
        {
          // margin:"10px 20px" ,
          //   padding:"0px",
        }
      }
    >
      <Box sx={{
         display: "flex",
         flexDirection: "column",
         justifyContent: "center",
         alignItems: "center",
      }}>
        <PCTypograpghy variant="h2">Why Choose Us?</PCTypograpghy>
        <Image   src={Rectangle} width={190} height={12} alt=""/>
      </Box>

      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          spacing={0}
          gap={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid xl={4} lg={3} md={3} sm={6} xs={12}>
            <CUCard
              image={Home}
              title="Potential ROI"
              subtitle="Whether you are looking to buy a fixer-upper or renovate your current home for sale, we
             will walk you through potential returns for projects."
            />
          </Grid>

          <Grid xl={4} lg={3} md={3} sm={6} xs={12}>
            <CUCard
              image={Brush}
              title="Design"
              subtitle="Our background in interior design makes the perfect guide through your design options and
          coordinating contractors to complete the home upgrade."
            />
          </Grid>

          <Grid xl={4} lg={3} md={3} sm={6} xs={12}>
            <CUCard
              image={Dollar}
              title="Marketing"
              subtitle="Staging consultation, professional photos and a sophisticated digital marketing plan
           accompany every listing to reach today’s buyers."
            />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default Choose;
