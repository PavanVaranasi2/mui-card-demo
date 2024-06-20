import styled from '@mui/system/styled';

interface IconProps {
  id?: string | undefined;
  className?: string | undefined;
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
const Icon: React.FC<IconProps> = ({ id, className, src, alt, width = 'auto', height = 'auto' }) => {
  return <StyledIcon id={id} className={className} src={src} alt={alt} width={width} height={height} />;
};

export default Icon;
