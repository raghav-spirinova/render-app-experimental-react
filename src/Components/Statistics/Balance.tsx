import { Box, Button, Typography } from "@mui/material";
import React, { FC } from "react";

interface BalanceProps {
  balance: number;
}

const Balance: FC<BalanceProps> = ({ balance }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#F8F8F8",
        borderRadius: "18px",
        padding: "10px",
        height: "27%",
        marginLeft: "15px",
        marginBottom: "15px",
      }}
    >
      <Typography
        sx={{
          color: "success.light",
          fontWeight: "600",
          fontSize: "25px",
          marginBottom: "10px",
        }}
      >
        Balance
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "success.light",
            fontWeight: "900",
            fontSize: "40px",
            lineHeight: "48px",
            marginBottom: "15px",
          }}
        >
          Rs. {balance.toLocaleString("en-IN")}
        </Typography>
        <Button color="warning" variant="contained">
          Recharge Now
        </Button>
      </Box>
    </Box>
  );
};

export default Balance;
