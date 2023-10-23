"use client";
import { COMMON, secondaryFont } from "@/assets/Theme/theme";
import {
  Box,
  Stack,
  Typography,
  Button,
  Input,
  ListItemButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

export const FIStack = styled(Stack)(({}) => ({
  margin: "2% 4%",
}));

export const FBImage = styled(Image)(({ theme }) => ({
    paddingTop:"6px",
  width: "25px",
  height: "25px",
}));

export const InstaImage = styled(Image)(({ theme }) => ({
    paddingTop:"6px",
  width: "25px",
  height: "25px",
}));

export const MessageImage = styled(Image)(({ theme }) => ({
    paddingTop:"6px",
  width: "25px",
  height: "25px",
}));

export const PhoneImage = styled(Image)(({ theme }) => ({
  marginRight: "20px",
  width: "18px",
  height: "20px",
}));

export const MailImage = styled(Image)(({ theme }) => ({
  marginRight: "20px",
  width: "18px",
  height: "20px",
}));

export const LocationImage = styled(Image)(({ theme }) => ({
  marginRight: "20px",
  width: "18px",
  height: "20px",
}));

export const CopyRightStack = styled(Stack)(({ theme }) => ({
  margin: "1% 2%",
}));


export const STypography = styled(Typography)(({ theme }) => ({
    fontFamily: secondaryFont.style.fontFamily,
    color:COMMON.primary.contrastText

}));

export const ImageBACK = styled(Box)(({ theme }) => ({
  width: "50px", /* Adjust the size as needed */
height: "50px", /* Adjust the size as needed */
backgroundColor:"white" ,
borderRadius: "50%",
display:"flex",
alignItems: "center",
justifyContent: "center",

}));


