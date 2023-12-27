import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

import { CustomTypo } from './styled-component';

import type { ReactNode } from 'react';

interface DivisionTypoProps {
  natureNum?: number | string;
  momNum: number | ReactNode;
  sonNum: number | ReactNode;
  width?: string;
  fontSize?: string;
}

export default function VisualFraction(props: DivisionTypoProps) {
  const { momNum, sonNum, width, natureNum, fontSize } = props;
  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      {natureNum && (
        <CustomTypo fontSize={fontSize ? fontSize : '1.5rem'}>
          {natureNum}
        </CustomTypo>
      )}
      <FractionContainer>
        <CustomTypo fontSize={fontSize ? fontSize : '1.5rem'}>
          {sonNum}
        </CustomTypo>
        <Divider $width={width} />
        <CustomTypo fontSize={fontSize ? fontSize : '1.5rem'}>
          {momNum}
        </CustomTypo>
      </FractionContainer>
    </Box>
  );
}

//폰트 얇은 분수
export function BasicVisualFraction(props: DivisionTypoProps) {
  const { momNum, sonNum, width, natureNum } = props;
  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      {natureNum && <Typography fontSize="1.2rem">{natureNum}</Typography>}
      <FractionContainer>
        <Typography fontSize="1.25rem">{sonNum}</Typography>
        <BasicDivider $width={width} />
        <Typography fontSize="1.25rem">{momNum}</Typography>
      </FractionContainer>
    </Box>
  );
}

const FractionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0rem;
  /* margin-top: 0.5rem; */
  align-items: center;
`;

const Divider = styled.div<{ $width?: string }>`
  margin: 0.1rem;
  border: solid 1px black;
  width: ${props => (props.$width ? props.$width : '1.5rem')};
`;

const BasicDivider = styled.div<{ $width?: string }>`
  margin: 0.1rem;
  border: solid 0.3px black;
  width: ${props => (props.$width ? props.$width : '1.5rem')};
`;
