"use client";
import Box from "@mui/material/Box";
import React from "react";
import { PCSTypography, PCTypograpghy, ProjectsBox } from "./Styled";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { ProjectsData } from "@/Data/dummy";


const OurProjects = () => {
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
        <PCTypograpghy variant="h2">Our Projects</PCTypograpghy>

        <PCSTypography>
          We know what buyers are looking for and suggest projects that will
          bring <br />
          clients top dollar for the sale of their homes.
        </PCSTypography>

      </Box>
      <Stack>
      <ProjectsBox>
      <Grid container spacing={1}>
        {ProjectsData.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={3}>
            <ProjectCard project={item} />
          </Grid>
        ))}   
      </Grid>
    </ProjectsBox>
      </Stack>
    </Box>
  );
};

export default OurProjects;
