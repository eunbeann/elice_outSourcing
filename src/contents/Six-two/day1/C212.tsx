import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import VisualFraction from 'src/contents/common/visual-fraction';
import { AnswerInput } from '../day2/C223';

import fractionBar from 'src/contents/assets/icon/fraction-bar.png';

interface C212Props {
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
export default function C212(props: C212Props) {
  //P21도 같은 컴포넌트 사용
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
    <Box display="flex" gap="0.2rem" paddingY="1rem" position="relative">
      {isSolved && <CorrectChecker isCorrect={isCorrect} />}
      <Typography> {qNum} </Typography>
      <Box display="flex" alignItems="center">
        <Typography mt="1.7rem">{momNum}</Typography>
        <Box ml="0.2rem" mt="2rem" mr="1rem" position="relative">
          <img width="60rem" height="20rem" src={fractionBar} alt="icon" />
          <Box position="absolute" left="0.8rem" top="0rem">
            {sonNum}
          </Box>
        </Box>
        <VisualFraction momNum={momNum} sonNum={sonNum} />
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
