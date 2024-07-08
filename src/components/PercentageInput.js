import React, { useState } from 'react';
import { TextField, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const InputContainer = styled(Box)(({ percentage }) => ({
  position: 'relative',
  width: '50%',
  '& .MuiInputBase-root': {
    background: `linear-gradient(90deg, rgb(65, 112, 152) ${percentage}%, rgba(255,255,255,1) ${percentage}%)`,
  },
}));

function PercentageInput({ description, numberPourcentage }) {
  const [percentage, setPercentage] = useState(numberPourcentage);

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value >= 0 && value <= 100) {
      setPercentage(value);
    }
  };

  return (
    <InputContainer style={{ marginBottom: '10px' }} percentage={percentage}>
      <TextField
        fullWidth
        variant="outlined"
        value={description}
        onChange={handleInputChange}
        inputProps={{ style: { textAlign: 'left' } }}
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        display="flex"
        alignItems="center"
        justifyContent="center"
        pointerEvents="none"
      >
        <Typography variant="body1" style={{ color: 'black' }}>
          {percentage}%
        </Typography>
      </Box>
    </InputContainer>
  );
}

export default PercentageInput;
