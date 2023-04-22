import React from "react";
import "./App.css";
import { Container, Icon } from "@mui/material";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FluorescentIcon from "@mui/icons-material/Fluorescent";
import CameraIcon from "@mui/icons-material/Camera";
import SnippetFolderIcon from "@mui/icons-material/SnippetFolder";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";
import AssessmentIcon from "@mui/icons-material/Assessment";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import CircleNotificationsOutlinedIcon from "@mui/icons-material/CircleNotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DashBoard from "./Components/DashBoard";

const drawerWidth = 100;

function App() {
  return (
    <>
      <Container maxWidth="sm" className="App">
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              zIndex: (theme) => theme.zIndex.drawer + 1,
              backgroundColor: "white",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box
              sx={{
                height: "70px",
                minWidth: "100px",
                backgroundColor: "#20293A",
                marginLeft: "0",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src="sgt-logo.svg" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontStyle: "italic", fontWeight: "bold" }}
              >
                SGRender
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <HelpOutlineOutlinedIcon
                  fontSize="large"
                  sx={{
                    ":hover": {
                      cursor: "pointer",
                    },
                  }}
                />
                <CircleNotificationsOutlinedIcon
                  fontSize="large"
                  sx={{
                    ":hover": {
                      cursor: "pointer",
                    },
                  }}
                />
                <SettingsOutlinedIcon
                  fontSize="large"
                  sx={{
                    ":hover": {
                      cursor: "pointer",
                    },
                  }}
                />
                <AccountCircleOutlinedIcon
                  sx={{
                    fontSize: "50px",
                    ":hover": {
                      cursor: "pointer",
                    },
                  }}
                />
              </Box>
            </Box>
          </AppBar>
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: "border-box",
                borderRight: "none",
              },
            }}
          >
            <Toolbar />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100vh",
                backgroundColor: "#20293A",
                color: "#DCDCDC",
              }}
            >
              <List>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      ":hover": {
                        bgcolor: "primary.main",
                        color: "white",
                      },
                    }}
                  >
                    <DashboardIcon fontSize="large" />
                    <Typography sx={{ fontSize: "14px" }}>
                      {" "}
                      Dashboard{" "}
                    </Typography>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      ":hover": {
                        bgcolor: "primary.main",
                        color: "white",
                      },
                    }}
                  >
                    <FluorescentIcon fontSize="large" />
                    <Typography sx={{ fontSize: "14px" }}>
                      {" "}
                      Analysis{" "}
                    </Typography>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      ":hover": {
                        bgcolor: "primary.main",
                        color: "white",
                      },
                    }}
                  >
                    <CameraIcon fontSize="large" />
                    <Typography sx={{ fontSize: "14px" }}> Jobs </Typography>
                  </ListItemButton>
                </ListItem>
              </List>
              <List>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      ":hover": {
                        bgcolor: "primary.main",
                        color: "white",
                      },
                    }}
                  >
                    <SnippetFolderIcon fontSize="large" />
                    <Typography sx={{ fontSize: "14px" }}> Assets </Typography>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      ":hover": {
                        bgcolor: "primary.main",
                        color: "white",
                      },
                    }}
                  >
                    <MultipleStopIcon fontSize="large" />
                    <Typography sx={{ fontSize: "14px" }}>
                      {" "}
                      Transfers{" "}
                    </Typography>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      ":hover": {
                        bgcolor: "primary.main",
                        color: "white",
                      },
                    }}
                  >
                    <AssessmentIcon fontSize="large" />
                    <Typography sx={{ fontSize: "14px" }}> Reports </Typography>
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </Box>
      </Container>

      <DashBoard />
    </>
  );
}

export default App;
