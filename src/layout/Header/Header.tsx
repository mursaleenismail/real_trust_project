"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { KeyboardArrowDown, Pets } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import {
  StyledToolbar,
  MenuBox,
  IconsBox,
  StyledAppbar,
  LIBox,
  LImage2,
  LImage1,
  StyledIconButton,
} from "./styled";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Logo from "../../../public/Header/Logo.png";
import Stack from "@mui/material/Stack";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const Header = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [pagesArr, setPagesArr] = React.useState([
    {
      name: "HOME",
    },
    {
      name: "SERVICES",
     
    },
    {
      name: "ABOUTPROJECTS",
     
    },
    {
      name: "TESTIMONALS",
    },
    {
      name: "Contact",
    },

    
  ]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Real TRUST
      </Typography>
      <Divider />
      <List>
        {pagesArr.map((x, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText primary={x.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    // <Container sx={{ padding: "30px 0" }}>
    <>
      <StyledAppbar>
        <StyledToolbar>
          <Stack direction="row">
            <LImage2 src={Logo} alt="" />
          </Stack>

          <MenuBox>
            <StyledIconButton
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </StyledIconButton>
            <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
              {pagesArr.map((page, index) => (
                <Button
                  key={index}
                  sx={{
                    marginRight: "8px",
                    color:"#192A68",
                    "&:hover": {
                      backgroundColor:"#F46D21",
                      fontSize: 14,
                      "& span": {
                        color: "#FFF", 
                      },
                    },
                  }}
                >
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color:"#192A68",
                      marginRight: "4px",
                    }}
                  >
                    {page.name}
                  </span>   
                </Button>
              ))}
            </Box>
          </MenuBox>
          <IconsBox>
{/* 
            <Button variant="contained"
              sx={{
                bgcolor: "#F46D21",
                padding:"20px 40px",
                borderRadius: "10px",
                display: "flex",
                justifyContent:"center",
                alignItems:"center",
                gap:"10px",
                width:"200px",
                "&:hover": {
                  backgroundColor:"#F46D21",
                  fontSize: 15,
                },
              }}
            > Contact
              

            </Button> */}
          </IconsBox>
        </StyledToolbar>
      </StyledAppbar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
    // </Container>
  );
};

export default Header;