import { COMMON, normalFont, primaryFont } from "@/assets/Theme/theme";
import { styled, Box, Typography } from "@mui/material";

export const TiteTypography = styled(Typography)(({}) => ({
  textAlign: "start",
  color:"#656464",
  fontFamily: primaryFont.style.fontFamily,
  marginBottom:"20px",
}));

export const PRBox = styled(Box)(({}) => ({
  padding: "3%",
 
}));

export const NameTypography = styled(Typography)(({}) => ({
  fontFamily: normalFont.style.fontFamily,
  textAlign: "start",
  color:"#217BF4",

}));

export const StarBox = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "row",
  marginLeft: "5px",
  marginRight: "4px",
}));
