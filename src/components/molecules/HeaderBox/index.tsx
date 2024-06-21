import { styled, Box } from "@mui/material";
import Icon from '../../atoms/Icon';

const TopHeaderBox = styled(Box)(({ theme }) => ({
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
    padding: theme.spacing(0, 0.5),
    gap: theme.spacing(0.625),
    marginBottom: '28px'
  }));

const HeaderBox: React.FC = () => {
    return <TopHeaderBox>
        <IconBox>
            <Icon src="./assets/icons/hp icon.svg" alt="Hp icon" width="45px" height="45px" />
        </IconBox>
        <TripleDotBox>
            <Icon src="./assets/icons/triple dot icon.svg" alt="Triple dot" width="24px" height="24px" />
        </TripleDotBox>
  </TopHeaderBox>;
}

export default HeaderBox;