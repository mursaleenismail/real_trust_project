import Box from "@mui/material/Box";
import React from "react";
import Image from "next/image";
import { PCTypograpghy, PCSTypography } from "./Styled";
import Rectangle from "../../../../public/Choose/Rectangle 51.png";
import { Button } from "@mui/material";

const AboutUs = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PCTypograpghy variant="h2">About Us</PCTypograpghy>
        <Image src={Rectangle} width={190} height={12} alt="" />

        <PCSTypography>
          Fifteen years of experience in real estate, excellent customer service
          and a <br />
          commitment to work hard, listen and follow through. We provide quality
          service to <br />
          build relationships with clients and, more importantly, maintain those
          relationships <br /> by communicating effectively.
        </PCSTypography>

        <Button
          variant="outlined"
          sx={{
            width: "400px",
            padding: "20px 40px",
            mt: 3,
            mb: 2,
            borderRadius: "10px",
            justifyContent: "center",
            alignItems: "center",
            color: "#217BF4",
            "&:hover": {
              backgroundColor: "white",
              fontSize: 15,
            },
          }}
        >
          {" "}
          Get Quick Quote
        </Button>
      </Box>
    </Box>
  );
};

export default AboutUs;
