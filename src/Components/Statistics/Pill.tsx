import { Box } from "@mui/material";
import React, { FC } from "react";

interface PillProp {
  name: string;
  state: boolean;
}

const Pill: FC<PillProp> = ({ name, state }) => {
  return (
    <Box
      sx={{
        width: "150px",
        height: "50px",

        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        cursor: "pointer",

        borderBottom: `solid ${state ? "5px #25AAE1" : "2px #0F0F0F"}`,
        borderRadius: "10px",
      }}
    >
      {name}
    </Box>
  );
};

export default Pill;
