import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Box, Divider, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import VisualFraction from 'src/contents/common/visual-fraction';
import { AnswerInput } from '../day2/C223';

import fractionBar from 'src/contents/assets/icon/fraction-bar.png';
interface C211Props {
  problem: {
    qId: number;
    qNum: string;
    qI: string;
    answer: number;
    pass: boolean;
  };
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}
export default function C211(props: C211Props) {
  //P21도 같은 컴포넌트 사용
  const [isCorrect, setIsCorrect] = useState(false);
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, qNum, qI, answer, pass } = problem;
  const [enter, setEnter] = useState<number | string>('');

  console.log(qI);

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
    <Box display="flex" gap="0.2rem" paddingY="1rem" position="relative">
      {isSolved && <CorrectChecker isCorrect={isCorrect} />}
      <Typography> {qNum} </Typography>
      <Box display="flex" alignItems="center">
        <img src="src/contents/assets/image/e_2-1-1.png" alt="questionImage" />
        <Typography marginX="0.4rem"> = </Typography>
        <AnswerInput
          type="number"
          value={enter}
          onChange={e => setEnter(Number(e.target.value))}
          step="any"
          disabled={isSolved}
        />
      </Box>
    </Box>
  );
}
