import React from 'react';
import { Button, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

interface PeriodSelectorProps {
  currentMonth: string;
  onPrevious: () => void;
  onNext: () => void;
}

export const PeriodSelector: React.FC<PeriodSelectorProps> = ({ currentMonth, onPrevious, onNext }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
      <IconButton onClick={onPrevious} aria-label="previous month">
        <ArrowBackIosNewIcon />
      </IconButton>
      <Typography variant="h6" component="div">
        {currentMonth}
      </Typography>
      <IconButton onClick={onNext} aria-label="next month">
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};