// src/components/organisms/JobCard.tsx
import React from 'react';
import {  Card, CardContent, styled } from '@mui/material';
import HeaderBox from '../../molecules/HeaderBox';
import ContentBox from '../../molecules/ContentBox';
import FooterBox from '../../molecules/FooterBox';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 320,
  height: 271,
  padding: theme.spacing(1, 0),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  margin: theme.spacing(30),
}));


const JobCard: React.FC = () => {
  return (
    <StyledCard>
      <CardContent>

        {/* Hp Icon And Triple dot icon */}
        <HeaderBox />

        {/* Description of Job */}
        <ContentBox />

        {/* Commute routes and time */}
        <FooterBox />

      </CardContent>
    </StyledCard>
  );
};

export default JobCard;
