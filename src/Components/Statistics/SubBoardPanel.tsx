import { Box } from "@mui/material";
import React, { useState } from "react";
import SubBoard from "./SubBoard";

const subBoardPanelDummyData = [
  {
    title: "Jobs",
    total: 29,
    finished: 5,
    running: 3,
    pending: 18,
    crashedOrCancelled: 3,
  },
  {
    title: "Frames",
    total: 1192,
    finished: 354,
    running: 789,
    pending: 123,
    crashedOrCancelled: 5,
  },
];

const SubBoardPanel = () => {
  const [subBoardPanelData, setSubBoardPanelData] = useState(
    subBoardPanelDummyData
  );
  return (
    <Box
      sx={{

      }}
    >
      {subBoardPanelData.map((data) => (
        <SubBoard {...data} />
      ))}
    </Box>
  );
};

export default SubBoardPanel;
