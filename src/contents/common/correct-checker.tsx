import { Box } from '@mui/material';

import correct from 'src/contents/assets/icon/correct.png';
import inCorrect from 'src/contents/assets/icon/inCorrect.png';

export default function CorrectChecker({ isCorrect }: { isCorrect: boolean }) {
  return (
    <Box
      component="img"
      sx={{
        position: 'absolute',
        width: '4.5rem',
        height: '4.5rem',
        transform: 'translate(-1rem, -0.2rem)',
        objectFit: 'contain',
      }}
      src={isCorrect ? correct : inCorrect}
      alt={isCorrect ? 'correct' : 'inCorrect'}
    />
  );
}
