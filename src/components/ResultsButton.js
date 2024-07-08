import React, { useState } from 'react';
import { Button, Collapse, Box } from '@mui/material';
import { styled } from '@mui/system';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const CustomButton = styled(Button)({
  borderRadius: '10px',
  color: 'black',
  backgroundColor: 'rgb(235, 242, 246)',
  border: '2px solid white',
  textTransform: 'none', // to keep the text as it is without uppercasing
  '&:hover': {
    backgroundColor: 'white', // optional: change background color on hover
  },
});

const ResultsButton = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <CustomButton
        startIcon={open ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
        onClick={handleToggle}
      >
        {title}
      </CustomButton>
      <Collapse in={open}>
        <Box mt={2} p={2} bgcolor="lightblue" borderRadius="10px">
          {content}
        </Box>
      </Collapse>
    </div>
  );
}

export default ResultsButton;
