import { Avatar } from '@mui/material';

import correct from 'src/contents/assets/icon/correct.png';
import inCorrect from 'src/contents/assets/icon/inCorrect.png';

export default function CorrectChecker({ isCorrect }: { isCorrect: boolean }) {
  return (
    <Avatar
      src={isCorrect ? correct : inCorrect}
      alt="Icon"
      style={{
        position: 'absolute',
        marginTop: '-0.6rem',
        marginLeft: '-1rem',
        zIndex: 1,
        width: '3rem',
        height: '3rem',
      }}
    />
  );
}
