import React, { useEffect, useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import VisualFraction from 'src/contents/common/visual-fraction';
import { AnswerInput } from '../day2/C223';
interface C222Props {
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
export default function C222(props: C222Props) {
  const [isCorrect, setIsCorrect] = useState(false);
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, qNum, sonNum, momNum, answer, pass } = problem;
  const [enter, setEnter] = useState<number>(0);

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
    <Box display="flex" gap="0.2rem" margin="2rem">
      {isSolved && <CorrectChecker isCorrect={isCorrect} />}
      <Typography> {qNum} </Typography>
      <Box display="flex" alignItems="center">
        <VisualFraction momNum={momNum} sonNum={sonNum} />
        <Typography marginX="1rem"> = </Typography>
        <AnswerInput
          type="number"
          value={enter}
          onChange={e => setEnter(Number(e.target.value))}
          step="any"
        />
      </Box>
    </Box>
  );
}
