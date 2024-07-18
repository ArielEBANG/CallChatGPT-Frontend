import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Link,
  Button,
} from "@mui/material";

const SimpleList = () => {
  const items = [
    {
      text: "Prérequis manquants",
      link: "#prerequis",
      number: 1,
      color: "rgb(102, 102, 102)",
    },
    {
      text: "Points forts",
      link: "#points-forts",
      number: 2,
      color: "rgb(80, 176, 166)",
    },
    {
      text: "Points d'attention",
      link: "#points-attention",
      number: 3,
      color: "rgb(237, 113, 78)",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        backgroundColor: "white",
        padding: "8px",
        // fontSize: "8px", // Taille de texte par défaut pour toute la page
      }}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: 0,
          fontSize: "8px",
        }}
      >
        {items.map((item, index) => (
          <ListItem key={index} sx={{ width: "auto" }}>
            <Link
              href={item.link}
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: item.color,
                fontSize: "5px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  backgroundColor: item.color,
                  color: "white",
                  marginRight: "8px",
                }}
              >
                <Typography variant="body2">{item.number}</Typography>
              </Box>
              <ListItemText primary={item.text} />
            </Link>
          </ListItem>
        ))}
        {/* rgb(49, 113, 156) */}
        <ListItem sx={{ width: "auto" }}>
          <Button
            variant="contained"
            sx={{
                backgroundColor: 'rgb(49, 113, 156)',
                '&:hover': {
                  backgroundColor: 'rgba(49, 113, 156, 0.8)',  // Opacity adjusted to 0.8
                },
              textTransform: "none",
              fontSize: "10px",
            }}
            href="#further-assistant"
          >
            Further with assistant(s)
          </Button>
        </ListItem>
      </List>
    </Box>
  );
};

export default SimpleList;
