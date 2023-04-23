import { Height } from "@mui/icons-material";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import Statistics from "./Statistics";

const DashBoard = () => {
  return (
    <Container
      sx={{
        height: "100%",
        width: "100%",
        backgroundColor: "white",
        paddingTop: "85px",
        marginInlineStart: "100px",
        minHeight: "100vh",
        minWidth: "calc(100% - 100px)",
      }}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          height: "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        Advertisement Space{" "}
      </Box>

      <Box
        sx={{
          minHeight: "300px",
          height: "fit-content",
          //   border: "3px red solid",
          marginTop: "25px",
        }}
      >
        <Statistics />
        
      </Box>
    </Container>
  );
};

export default DashBoard;
