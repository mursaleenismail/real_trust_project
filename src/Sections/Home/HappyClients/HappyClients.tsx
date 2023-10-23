"use client";
import Box from '@mui/material/Box'
import React from 'react'
import { HCBox, PCTypograpghy } from './Styled'
import Stack from '@mui/material/Stack'
import { ClientssData } from '@/Data/dummy'
import Grid from '@mui/material/Grid'
import ClientsCard from '@/components/ClientsCard/ClientsCard'

const HappyClients = () => {
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
        <PCTypograpghy variant="h2">Happy Clients</PCTypograpghy>
      </Box>
      <Stack>
      <HCBox>
      <Grid container spacing={1}>
        {ClientssData.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={2.4} xl={2.4}>
            <ClientsCard clients={item} />
          </Grid>
        ))}   
      </Grid>
    </HCBox>
      </Stack>
    </Box>
  )
}

export default HappyClients;
