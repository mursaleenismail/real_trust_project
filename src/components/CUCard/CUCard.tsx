import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { CUIBox, PCRCard, CUCardContent, PCTTypography, TBox, PCSTypography } from "./Styled";

interface CardProps {
  image?: any;
  title?: string;
  subtitle?: string;
}

const CUCard = ({ image, title, subtitle }: CardProps) => {
  return (
    <PCRCard>
      <CUCardContent>
        <CUIBox>
          <Image src={image} width={50} height={50} alt="" />
        </CUIBox>
        <TBox>
          <PCTTypography variant="h4"> {title}</PCTTypography>
          <PCSTypography variant="body1">{subtitle}</PCSTypography>
        </TBox>
      </CUCardContent>
    </PCRCard>
  );
};

export default CUCard;

       