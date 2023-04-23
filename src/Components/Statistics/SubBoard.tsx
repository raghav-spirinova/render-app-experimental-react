import { Box, Typography } from "@mui/material";
import React, { FC } from "react";

interface SubBoardProps {
  title: string;
  total: number | string;
  finished: number | string;
  running: number | string;
  pending: number | string;
  crashedOrCancelled: number | string;
}

const SubBoard: FC<SubBoardProps> = ({
  title,
  total,
  finished,
  running,
  pending,
  crashedOrCancelled,
}) => {
  return (
    <Box
      sx={{
        padding: "15px 30px",
        backgroundColor: "#F8F8F8",
        borderRadius: "18px",
        margin: "15px auto",
      }}
    >
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: "20px",
          lineHeight: "24px",
          color: "#5F5F5F",
          paddingBottom: "25px",
        }}
      >
        {title} Running
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "10%",
          }}
        >
          Total
          <br />
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "30px",
              color: "#606060",
            }}
          >
            {total}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          Finished
          <br />
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "30px",
              color: "#606060",
            }}
          >
            {finished}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          Running
          <br />
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "30px",
              color: "#606060",
            }}
          >
            {running}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          Pending
          <br />
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "30px",
              color: "#606060",
            }}
          >
            {pending}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          Crashed/Cancelled
          <br />
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "30px",
              color: "#606060",
            }}
          >
            {crashedOrCancelled}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SubBoard;
