import { styled, Typography, useTheme, Box } from "@mui/material";
import CommuteRoutes from '../CommuteRoutes';

const BottomBox = styled(Box)(({ theme }) => ({
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


const FooterBox: React.FC = () => {
    const theme = useTheme();
    return <BottomBox>
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
  </BottomBox>
}

export default FooterBox;