import styled from '@emotion/styled';
import { Avatar } from '@mui/material';

import correct from 'src/contents/assets/icon/correct.png';
import inCorrect from 'src/contents/assets/icon/inCorrect.png';

export default function CorrectChecker({
  isCorrect,
  $width,
}: {
  isCorrect: boolean;
  $width?: number;
}) {
  console.log($width);
  return (
    <AvatarWrapper $width={$width ? $width : 3.2}>
      <Avatar
        variant="square"
        src={isCorrect ? correct : inCorrect}
        alt="Icon"
        style={{
          position: 'absolute',
          marginTop: '-0.6rem',
          marginLeft: '-2rem',
          zIndex: 1,
          // width: '3.2rem',
          // height: '3rem',
          left: '1rem',
        }}
      />
    </AvatarWrapper>
  );
}

const AvatarWrapper = styled.div<{ $width: number }>`
  & div {
    width: ${({ $width }) => $width}rem;
    height: ${({ $width }) => $width}rem;
  }
  & img {
    width: ${({ $width }) => $width}rem;
    height: ${({ $width }) => $width}rem;
  }
`;
