import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Box, Input, TextField, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import { NumberInput } from 'src/contents/common/number-box';
import VisualFraction from 'src/contents/common/visual-fraction';
interface C223Props {
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
export default function C223(props: C223Props) {
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
    <Box display="flex" gap="0.2rem" margin="2rem" position="relative">
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
          disabled={isSolved}
        />
      </Box>
    </Box>
  );
}

export const AnswerInput = styled.input`
  width: 4rem;
  height: 2rem;
  border: solid #ededee 0.1rem;
  border-radius: 5px;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  :focus {
    outline: none;
    box-shadow: none;
  }

  -moz-appearance: textfield;
`;
