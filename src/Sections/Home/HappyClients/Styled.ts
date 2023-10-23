"use client";
import {
  COMMON,
  elementryFont,
  normalFont,
  primaryFont,
} from "@/assets/Theme/theme";
import { styled, Box, Card, Stack, Typography, Button } from "@mui/material";

export const PCTypograpghy = styled(Typography)(({}) => ({
  color: "#217BF4",
  textAlign: "center",
  marginBottom: "50px",
  marginTop: "30px",
  fontFamily: primaryFont.style.fontFamily,
}));

export const PCSTypography = styled(Typography)(({}) => ({
  fontFamily: normalFont.style.fontFamily,
  lineHeight: "35px",
  textAlign: "center",
  color: "#656464",
  margin: "20px 0px",
}));

export const HCBox = styled(Box)(({}) => ({
  marginTop: 60,
}));
