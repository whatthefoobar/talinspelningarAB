"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "next/link";

const drawerWidth = 240;
const navItems = [
  { label: "Hem", path: "/" },
  { label: "Om oss", path: "/omoss" },
  { label: "Karriär", path: "/karriar" },
  { label: "Inläsare", path: "/inlasare" },
  // { label: "X", path: "/" },
  // { label: "Kontakt", path: "/kontakt" },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
    // console.log("menu is toggled");
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link href="/" passHref>
        <Typography variant="h6" sx={{ my: 2 }}>
          <Image
            src="/talinspelningar-logo@2x-lilac.png"
            alt="logo"
            width={200}
            height={30}
          />
        </Typography>
      </Link>

      <Divider />
      <List>
        {navItems.map((item) => (
          <Link href={item.path} passHref key={item.label}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ backgroundColor: "#0b1d51" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" passHref>
              <Image
                src="/talinspelningar-logo@2x-lilac.png"
                alt="logo"
                width={200}
                height={30}
              />
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link href={item.path} passHref key={item.label}>
                <Button sx={{ color: "#b7c0ee" }}>{item.label}</Button>
              </Link>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "#b7c0ee" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <CssBaseline />

      <nav>
        <Drawer
          variant="temporary"
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
              backgroundColor: "#0b1d51",
              color: "#b7c0ee",
            },
          }}
          anchor="right"
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;
