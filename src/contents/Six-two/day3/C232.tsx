import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import { AnswerInput } from 'src/contents/common/number-box';
import { CustomTypo } from 'src/contents/common/styled-component';
import VisualFraction from 'src/contents/common/visual-fraction';
interface C232Props {
  problem: {
    qId: number;
    qNum: string;
    natureNum: number;
    sonNum: number;
    momNum: number;
    answer: number;
    pass: boolean;
  };
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}
export default function C232(props: C232Props) {
  const [isCorrect, setIsCorrect] = useState(false);
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, qNum, natureNum, sonNum, momNum, answer, pass } = problem;
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
      <CustomTypo> {qNum} </CustomTypo>
      <Box display="flex" alignItems="center" marginX="0.5rem">
        <VisualFraction
          width="2.2rem"
          natureNum={natureNum}
          momNum={momNum}
          sonNum={sonNum}
        />
        {/* <Visuu */}
        <CustomTypo marginX="1rem"> = </CustomTypo>
        <AnswerInput
          value={enter}
          onChange={e => setEnter(Number(e.target.value))}
          disabled={isSolved}
        />
      </Box>
    </Box>
  );
}
