// src/components/organisms/JobCard.tsx
import React from 'react';
import { Box, Typography, Card, CardContent, styled, useTheme } from '@mui/material';
import Icon from '../../atoms/Icon';
import CommuteRoutes from '../../molecules/CommuteRoutes';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 320,
  height: 271,
  padding: theme.spacing(1, 0),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  margin: theme.spacing(30),
}));

const HeaderBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: theme.spacing(3),
  opacity: 1,
  marginBottom: theme.spacing(4),
}));

const IconBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0.5, 0, 0, 0),
  gap: theme.spacing(1.25),
}));

const TripleDotBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.25, 0.5),
  gap: theme.spacing(0.625),
}));

const ContentBox = styled(Box)(({ theme }) => ({
  textAlign: 'left',
  lineHeight: '22px',
  marginBottom: theme.spacing(4),
}));

const FooterBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const InfoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

const TimeBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
}));

const JobCard: React.FC = () => {
  const theme = useTheme();

  return (
    <StyledCard>
      <CardContent>
        <HeaderBox>
          <IconBox>
            <Icon src="./assets/icons/hp icon.svg" alt="Hp icon" width="45px" height="45px" />
          </IconBox>
          <TripleDotBox>
            <Icon src="./assets/icons/triple dot icon.svg" alt="Triple dot" width="24px" height="24px" />
          </TripleDotBox>
        </HeaderBox>

        <ContentBox>
          <Typography variant="subtitle1">
            User Experience Designer
          </Typography>
          <Typography variant="caption" sx={{ color: theme.palette.primary.main }}>
            HP
          </Typography>
          <br/>
          <Typography variant="caption">
            Hyderabad, Telangana, India
          </Typography>
        </ContentBox>

        <FooterBox>
          <InfoBox>
            <Typography variant="caption" sx={{ color: theme.palette.text.high, marginBottom: theme.spacing(1.2) }}>
              Commute routes available:
            </Typography>
            <CommuteRoutes />
          </InfoBox>
          <TimeBox>
            <Typography variant="caption" sx={{ color: theme.palette.text.high }}>
              1hr 36 mins ago
            </Typography>
          </TimeBox>
        </FooterBox>
      </CardContent>
    </StyledCard>
  );
};

export default JobCard;
