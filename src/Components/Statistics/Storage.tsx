import React, { FC } from "react";
import { Box, Button, Typography } from "@mui/material";
import { PieChart, Pie } from "recharts";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface StorageProps {
  occupied: string;
  percentage: string;
}

const Storage: FC<StorageProps> = ({ occupied, percentage }) => {
  const options: any = {
    responsive: true,

    elements: {
      arc: {
        borderAlign: "inner",
      },
    },

    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },

    layout: {
      autoPadding: false,
    },

    datasets: {
      doughnut: {
        cutout: "75%",
        rotation: -90,
        circumference: 180,
        radius: "100%",
        borderAlign: "radius",
      },
    },
  };
  const data = {
    labels: ["Used", "Free"],
    datasets: [
      {
        label: "Storage",
        data: [parseInt(percentage), 100 - parseInt(percentage)],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
      },
    ],
  };
  return (
    <Box
      sx={{
        backgroundColor: "#F8F8F8",
        borderRadius: "18px",
        padding: "10px",
        height: "30%",
        marginLeft: "15px",
      }}
    >
      <Typography
        sx={{
          color: "secondary.dark",
          fontWeight: "600",
          fontSize: "25px",
        }}
      >
        Storage
      </Typography>

      <Typography
        sx={{
          fontWeight: "700",
          fontSize: "20px",
          lineHeight: "26px",
          color: "#5D5DDD",
        }}
      >
        {occupied}
        <br />
        {percentage}
      </Typography>

      <Box
        sx={{
          position: "relative",
          bottom: "102%",
          paddingLeft: "40px",
        }}
      >
        <Doughnut data={data} options={options} />
      </Box>
    </Box>
  );
};

export default Storage;
