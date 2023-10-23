import { COMMON, normalFont, primaryFont } from "@/assets/Theme/theme";
import {
  styled,
  Box,
  Card,
  Stack,
  Typography,
  Button,
  CardContent,
} from "@mui/material";

export const PCRCard = styled(Card)(({}) => ({
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 7px 30px 0px rgba(0, 0, 0, 0.05)",
  width: "auto",
  height: "auto",
  borderRadius: "40px",
  border: "none",
  margin: "15px 15px ",
}));

export const CUCardContent = styled(CardContent)(({}) => ({
  padding: "20px 35px",
//   margin: "15px 15px ",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
export const CUIBox = styled(Box)(({}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(33, 123, 244, 0.05)",
  borderRadius: "50%",
  width: "125px",
  height: "125px",
}));

export const TBox = styled(Box)(({}) => ({
  textAlign: "center",
  paddingTop: "20px",
}));

export const PCTTypography = styled(Typography)(({}) => ({
  fontFamily: normalFont.style.fontFamily,
  color: "#217BF4",
}));

export const PCSTypography = styled(Typography)(({}) => ({
  fontFamily: normalFont.style.fontFamily,
  color: "#656464",
  margin: "20px 0px",
}));
