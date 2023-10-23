"use clinet";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import FBIcon from "../../../public/Footer/facebook.png";
import InstaIcon from "../../../public/Footer/insta.png";
import TwitterIcon from "../../../public/Footer/twitter.png";
import LinkedInIcon from "../../../public/Footer/Linkedin.png";
import {
  CopyRightStack,
  FBImage,
  FIStack,
  InstaImage,
  LocationImage,
  MailImage,
  MessageImage,
  PhoneImage,
  STypography,
} from "./Styled";
// import UMButton from "../UMButton/UMButton";
const IconBox = () => {
  return (
    <Box
      sx={{
        width: "1905px",
        height: "56px",
        // backgroundColor: "white",
        backgroundColor: "#2B2D30",
      }}
    >
      <Grid container spacing={0}>
        <Grid item xl={9} lg={9} md={8} sm={6} xs={12}>
          <CopyRightStack direction="row" spacing={2} flex={4}>
            <Stack direction="row" spacing={2}>
             
              <STypography>
                1515 Market Street, Philadelphia, PA 19102, USA.
              </STypography>
            </Stack>
          </CopyRightStack>
        </Grid>
        <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
          <Link href="#">
            <FIStack justifyContent="end" direction="row" spacing={3} flex={1}>
              <FBImage src={FBIcon} alt="" />
              <InstaImage src={InstaIcon} alt="" />
              <MessageImage src={TwitterIcon} alt="" />
            </FIStack>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default IconBox;
