import { Box } from '@mui/material';

import correct from 'src/contents/assets/icon/correct.png';
import inCorrect from 'src/contents/assets/icon/inCorrect.png';

export default function CorrectChecker({
  isCorrect,
  $width,
}: {
  isCorrect: boolean;
  $width?: number;
}) {
  return (
    <Box
      component="img"
      sx={{
        position: 'absolute',
        width: `${$width ? $width : 4.5}rem`,
        height: `${$width ? $width : 4.5}rem`,
        transform: `${
          $width === 20 ? 'translate(-50%,-50%)' : 'translate(-1.2rem, -0.6rem)'
        }`,
        objectFit: 'contain',
      }}
      src={isCorrect ? correct : inCorrect}
      alt={isCorrect ? 'correct' : 'inCorrect'}
    />
  );
}
