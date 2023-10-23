"use client";
import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { PRBox, NameTypography, TiteTypography } from "./Styled";

interface ClientsCardProps {
  clients: {
    name: string;
    description: string;
    position: string;
    image: string;
  };
}

const ClientsCard: React.FC<ClientsCardProps> = ({ clients }) => {
  return (
    <Card
      sx={{ borderRadius: "0px 0px 8px 8px", bgcolor: "#FFFFFF" }}
      elevation={0}
    >
      <Stack>
        <Image
          className="responsive-card"
          style={{ margin: "auto" }}
          src={clients.image}
          width={62}
          height={62}
          alt=""
        />
      </Stack>

      <CardContent>
        <TiteTypography variant="subtitle2">
          {" "}
          {clients.description}
        </TiteTypography>
        <PRBox>
          <Box>
            <NameTypography variant="h6">{clients.name}</NameTypography>
            <TiteTypography variant="subtitle2">{clients.position}</TiteTypography>
          </Box>{" "}
        </PRBox>
      </CardContent>
    </Card>
  );
};

export default ClientsCard;
