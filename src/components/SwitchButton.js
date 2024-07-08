import React from 'react';
import { Box, Switch, Typography, FormControlLabel } from '@mui/material';

function SwitchButton({ showText, handleSwitchChange, content, label }) {

  return (
    <Box display="flex" flexDirection="column" alignItems="left" p={2}>
      <FormControlLabel
        control={<Switch checked={showText} onChange={handleSwitchChange} />}
        label={label}
      />
      {showText && (
        <Typography variant="body1" sx={{ mt: 2 }}>
          {content}
        </Typography>
      )}
    </Box>
  );
}

export default SwitchButton;