import React from "react";
import { Button } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const NavbarButton = () => {
  return (
    <Button
      variant="outlined"
      endIcon={<ArrowDropDownIcon />}
      sx={{
        borderRadius: "20px",
        color: "blue",
        backgroundColor: "white",
        border: "2px solid blue",
        textTransform: "none", // to keep the text as it is without uppercasing
        "&:hover": {
          backgroundColor: "lightgray", // optional: change background color on hover
        },
      }}
    >
      Custom Button
    </Button>
  );
};

export default NavbarButton;
