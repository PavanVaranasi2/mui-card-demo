// src/components/molecules/CommuteRoutes.tsx
import React from 'react';
import { Box, styled } from '@mui/material';
import IconEle from '../../atoms/IconEle';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '144px',
  height: '24px',
  gap: theme.spacing(2),
}));

const CommuteIconBox = styled(Box)(({ theme }) => ({
  '&.commuteRoute': {
    padding: '1.5px 4px 1.5px 4px',
  },
  '&.commuteRouteBus': {
    padding: '3px',
  },
  '&.commuteRouteCar': {
    padding: '3.5px 2px 3.5px 2px',
  },
  '&.commuteRouteTrain': {
    padding: '3px 4.5px 3px 4.5px',
  },
}));

const CommuteRoutes: React.FC = () => {
  return (
    <StyledBox>
      <CommuteIconBox className="commuteRoute">
        <IconEle src='./bike icon.png' alt='Bike' width='16px' height='21px' />
      </CommuteIconBox>
      <CommuteIconBox className="commuteRouteBus">
        <IconEle src='./bus icon.png' alt='Bus' width='18px' height='18px' />
      </CommuteIconBox>
      <CommuteIconBox className="commuteRouteCar">
        <IconEle src='./car icon.png' alt='Car' width='20px' height='17px' />
      </CommuteIconBox>
      <CommuteIconBox className="commuteRouteTrain">
        <IconEle src='./train icon.png' alt='Train' width='15px' height='18px' />
      </CommuteIconBox>
    </StyledBox>
  );
};

export default CommuteRoutes;
