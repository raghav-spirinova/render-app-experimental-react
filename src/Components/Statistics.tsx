import { Box } from "@mui/material";
import React from "react";
import PillPanel from "./Statistics/PillPanel";
import SubBoardPanel from "./Statistics/SubBoardPanel";
import Balance from "./Statistics/Balance";
import Storage from "./Statistics/Storage";

const Statistics = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        maxHeight: "50%",
      }}
    >
      <Box
        sx={{
          width: "75%",
        }}
      >
        <PillPanel />
        <SubBoardPanel />
      </Box>
      <Box
        sx={{
          width: "25%",
        }}
      >
        <Balance balance={283450} />
        <Storage occupied={"12.5 TB"} percentage={"25.0 %"} />
      </Box>
    </Box>
  );
};

export default Statistics;
