// src/App.tsx
import React from 'react';
import { Container } from '@mui/material';
import JobCard from '../../organisms/JobCard';

const CardTemplate: React.FC = () => {
  return (
    <Container>
      <JobCard />
    </Container>
  );
};

export default CardTemplate;
