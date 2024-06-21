import styled from '@mui/system/styled';

interface IconProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
}

// internal styling
const StyledIcon = styled('img')<IconProps>(({ width, height }) => ({
  width,
  height,
}));


// id and classnames are for future adaptions for external css.
const Icon: React.FC<IconProps> = ({ src, alt, width = 'auto', height = 'auto' }) => {
  return <StyledIcon src={src} alt={alt} width={width} height={height} />;
};

export default Icon;
