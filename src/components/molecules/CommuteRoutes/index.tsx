import { Box, styled } from '@mui/material';
import Icon from '../../atoms/Icon';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '144px',
  height: '24px',
  gap: theme.spacing(2),
}));

const iconData = [
  { src: './assets/icons/bike icon.svg', alt: 'Bike', className: 'commuteRoute', width: '16px', height: '21px' },
  { src: './assets/icons/bus icon.svg', alt: 'Bus', className: 'commuteRouteBus', width: '18px', height: '18px' },
  { src: './assets/icons/car icon.svg', alt: 'Car', className: 'commuteRouteCar', width: '20px', height: '17px' },
  { src: './assets/icons/train icon.svg', alt: 'Train', className: 'commuteRouteTrain', width: '15px', height: '18px' },
];

const CommuteRoutes: React.FC = () => {
  return (
    <StyledBox>
      {iconData.map((icon, index) => (
        <Box key={index+1} className={icon.className}>
          <Icon src={icon.src} alt={icon.alt} width={icon.width} height={icon.height} />
        </Box>
      ))}
    </StyledBox>
  );
};

export default CommuteRoutes;
