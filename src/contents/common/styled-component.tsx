import styled from '@emotion/styled';
import { Typography } from '@mui/material';
interface CustomTypoProps {
  fontSize?: string;
}

export const CustomTypo = styled(Typography)<CustomTypoProps>`
  color: #000;
  font-style: normal;
  font-weight: 600;
  line-height: 1.334;
  font-size: ${props => (props.fontSize ? props.fontSize : '1.5rem')};
`;
