import styled from '@emotion/styled';

import { CustomTypo } from './styled-component';

import type { ReactNode } from 'react';

interface DivisionTypoProps {
  momNum: number | ReactNode;
  sonNum: number | ReactNode;
  width?: string;
}

export default function VisualFraction(props: DivisionTypoProps) {
  const { momNum, sonNum, width } = props;
  return (
    <FractionContainer>
      <CustomTypo fontSize="18px">{sonNum}</CustomTypo>
      <Divider $width={width} />
      <CustomTypo fontSize="18px">{momNum}</CustomTypo>
    </FractionContainer>
  );
}

const FractionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0rem;
  margin-top: 0.5rem;
  align-items: center;
`;

const Divider = styled.div<{ $width?: string }>`
  border: solid 1px black;
  width: ${props => (props.$width ? props.$width : '1.5rem')};
`;
