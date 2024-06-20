interface IconEleProps {
    src: string;
    alt: string;
    width?: string | number;
    height?: string | number;
    padding?: string;
    gap?: string;
  }
  
  const IconEle: React.FC<IconEleProps> = ({
    src,
    alt,
    width = 'auto',
    height = 'auto',
    padding = '0',
    gap = '0',
  }) => {
    return (
      <img
        src={src}
        alt={alt}
        style={{ width, height, padding, gap }}
      />
    );
  };
  
  export default IconEle;