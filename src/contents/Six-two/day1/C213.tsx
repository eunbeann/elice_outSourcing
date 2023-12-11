import React, { useEffect, useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import VisualFraction from 'src/contents/common/visual-fraction';
import { AnswerInput } from '../day2/C223';
interface C213Props {
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
export default function C213(props: C213Props) {
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
    <Box display="flex" gap="0.2rem" paddingY="1rem">
      {isSolved && <CorrectChecker isCorrect={isCorrect} />}
      <Typography> {qNum} </Typography>
      <Box display="flex" alignItems="center">
        <Typography>{momNum}</Typography>
        <Box
          border="1px solid grey"
          borderBottom="none"
          borderRight="none"
          paddingLeft="0.5rem"
          paddingRight="3rem"
          marginX="0.7rem"
        >
          {sonNum}
        </Box>
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
