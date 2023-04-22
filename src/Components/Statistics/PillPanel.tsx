import React, { useState } from "react";
import Pill from "./Pill";
import { Box } from "@mui/material";

const pillPanelOptions = [
  { name: "Now", state: true },
  { name: "This Week", state: false },
  { name: "Last Week", state: false },
  { name: "This Week", state: false },
  { name: "This Month", state: false },
  { name: "This Quarter", state: false },
  { name: "This Year", state: false },
  { name: "All Time", state: false },
];

const PillPanel = () => {
  const [panelState, setPanelState] = useState(pillPanelOptions);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "5px",
      }}
    >
      {panelState.map((pill) => (
        <Pill key={pill.name} name={pill.name} state={pill.state} />
      ))}
    </Box>
  );
};

export default PillPanel;
