import React from "react";
import { Box, LinearProgress, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
      backgroundColor: 'rgb(181, 187, 196)',
    },
    barDefault: {
      backgroundColor: 'rgba(88, 193, 180)',
    },
    barAlternative: {
      backgroundColor: 'rgba(237, 113, 78)',
    },
  });

function ProgressBar({ value, label }) {
  const classes = useStyles();
  
  const barClass = value >= 50 ? classes.barDefault : classes.barAlternative;
  
  return (
    <Box display="flex" alignItems="center" width="100%" mb={1}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '15rem' }}>
        <p>
            {label}
        </p>
        <Box width="100%" mr={1}>
            <LinearProgress classes={{ root: classes.root, bar: barClass }} variant="determinate" value={value} sx={{ height: 10, borderRadius: '8px' }} />
        </Box>
        {/* rgba(88, 193, 180) */}
        <Box minWidth={35}>
            <Typography variant="body2" color="black">{`${Math.round(value)}%`}</Typography>
        </Box>
      </div>
    </Box>
  );
}

export default ProgressBar;