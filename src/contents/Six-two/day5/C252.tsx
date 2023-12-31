import { useEffect, useState } from 'react';
import { Box, TextField } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import { CustomTypo } from 'src/contents/common/styled-component';
import VisualFraction from 'src/contents/common/visual-fraction';
interface C253Props {
  problem: {
    qId: number;
    qNum: string;
    sonNum: number;
    momNum: number;
    answer: number;
    pass: boolean;
  };
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C252(props: C253Props) {
  const [isCorrect, setIsCorrect] = useState(false);
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, qNum, sonNum, momNum, answer, pass } = problem;
  const [enter, setEnter] = useState<number | string>('');

  useEffect(() => {
    if (enter === answer) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [isSolved, qId]);

  return (
    <Box
      display="flex"
      gap="0.2rem"
      alignContent="start"
      margin="2rem"
      position="relative"
    >
      {isSolved && <CorrectChecker isCorrect={isCorrect} />}
      <CustomTypo> {qNum}</CustomTypo>
      <VisualFraction momNum={momNum} sonNum={sonNum} />
      <TextField
        value={enter}
        onChange={e => setEnter(Number(e.target.value))}
        style={{ width: '2.5rem', textAlign: 'center', margin: '1.2rem' }}
        disabled={isSolved}
      />
    </Box>
  );
}
