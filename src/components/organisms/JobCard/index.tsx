// src/components/organisms/JobCard.tsx
import React from 'react';
import { Box, Typography, Card, CardContent, useTheme } from '@mui/material';
import IconEle from '../../atoms/IconEle';
import CommuteRoutes from '../../molecules/CommuteRoutes';

const JobCard: React.FC = () => {
  const theme = useTheme();

  return (
    <Card sx={{ 
        maxWidth: 320, 
        height: 271, 
        padding: theme.spacing(2, 0), 
        borderRadius: '12px', 
        backgroundColor: theme.palette.background.paper, 
        margin: theme.spacing(1.25),
    }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" sx={{ gap: theme.spacing(3), opacity: 1, marginBottom: theme.spacing(4) }}>
          <Box sx={{ padding: theme.spacing(0.5, 0, 0, 0), gap: theme.spacing(1.25) }}>
            <IconEle src="./hp icon.png" alt="Hp icon" width='45px' height='45px' />
          </Box>
          <Box sx={{ padding: theme.spacing(1.25, 0.5), gap: theme.spacing(0.625) }}>
            <IconEle src="./triple dot icon.png" alt="Triple dot" width='24px' height='24px' />
          </Box>
        </Box>

        <Box sx={{ textAlign: 'left', marginBottom: theme.spacing(4) }}>
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
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='caption' sx={{ color: theme.palette.text.primary, marginBottom: theme.spacing(1), textAlign: 'left', width: '170px' }}>
              Commute routes available:
            </Typography>
            <CommuteRoutes />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Typography variant="caption" sx={{ width: '95px', height: '16px', textAlign: 'right' }}>
              1hr 36 mins ago
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default JobCard;
