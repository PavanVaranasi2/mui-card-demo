import { styled, Box, Typography, useTheme } from "@mui/material";

const DescriptionBox = styled(Box)(({ theme }) => ({
    textAlign: 'left',
    lineHeight: '22px',
    marginBottom: theme.spacing(4),
  }));

const ContentBox: React.FC = () => {
    const theme = useTheme();
    return <DescriptionBox>
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
  </DescriptionBox>
}

export default ContentBox;