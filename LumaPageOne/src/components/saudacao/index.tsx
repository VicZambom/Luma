import React from "react";
import { Typography } from "@mui/material";

interface GreetingProps {
  name: string;
}

export const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return (
    <Typography
      variant="h6"
      sx={{
        fontWeight: "bold",
        color: "#5D3998",
        marginBottom: 2,
        textAlign: "left",
        width: "100%",
        mt: -10,
      }}
    >
      Olá, {name}
    </Typography>
  );
};
