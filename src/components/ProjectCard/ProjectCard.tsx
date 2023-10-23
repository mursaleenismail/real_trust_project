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
import { PRBox, PRTypography, StarBox, TiteTypography } from "./Styled";


interface ProjectCardProps {
    project: {
      title: string;
      subtitle: string;
      image: string;
    };
  }


  const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card sx={{borderRadius: "0px 0px 8px 8px",bgcolor:"#FFFFFF"}} elevation={0}>
      <Stack>
        <Image
          className="responsive-card"
          style={{ margin: "auto" }}
          src={project.image}
          width={350}
          height={330}
          alt=""
        />
      </Stack>

      <CardContent>
        <TiteTypography variant="h5"> {project.title}</TiteTypography>
        <PRBox>
          <Box >
            <PRTypography variant="subtitle1">{project.subtitle}</PRTypography>
          </Box>{" "}
        
         
        </PRBox>
        <Button
            type="submit"
            
            sx={{
              bgcolor: "#F46D21",
              padding: "20px 40px",
              mt: 3,
              mb: 2,
              width:"192px",
              height:"42px",    
              borderRadius: "8px",
              color: "white",
              "&:hover": {
                backgroundColor: "#F46D21",
                fontSize: 15,
              },    
            }}
          >
            {" "}
            READ MORE
          </Button>
      </CardContent>
    </Card>
  )
}

export default ProjectCard
