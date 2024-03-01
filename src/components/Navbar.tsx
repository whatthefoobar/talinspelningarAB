import * as React from "react";
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
import { Link } from "react-router-dom";
import logo from "../assets/images/talinspelningar-logo@2x-lilac.png";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 360;
// const navItems = ["Home", "Career", "Narrators", "Contact"];
const navItems = [
  { label: "Home", path: "/" },
  { label: "Career", path: "/career" },
  { label: "Narrators", path: "/narrators" },
  { label: "Contact", path: "/contact" },
];

const Navbar = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link to="/" sx={{ textDecoration: "none", color: "inherit" }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          {/* Talinspelningar */}
          <img src={logo} alt="Logo" style={{ width: "200px" }} />
        </Typography>
      </Link>

      <Divider />
      <List>
        {navItems.map((item) => (
          <Link to={item.path} key={item.label}>
            <ListItem key={item.label} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ backgroundColor: "#565554" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* Talinspelningar */}
            <img src={logo} alt="Logo" style={{ width: "200px" }} />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link to={item.path} key={item.label}>
                <Button sx={{ color: "#c1d8eb" }}>{item.label}</Button>
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
            <MenuIcon sx={{ color: "#c1d8eb" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <CssBaseline />

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#565554",
              color: "#c1d8eb",
            },
          }}
          anchor="right" // Setting anchor to right side
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;
