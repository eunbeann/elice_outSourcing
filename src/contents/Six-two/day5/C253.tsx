import React, { useEffect, useState } from 'react';
import { Box, Input } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import { CustomTypo } from 'src/contents/common/styled-component';
interface C253Props {
  problem: {
    qId: number;
    qNum: string;
    q: string;
    answer: string | number;
    pass: boolean;
    unit: string;
  };
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C253(props: C253Props) {
  const [isCorrect, setIsCorrect] = useState(false);
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, qNum, q, answer, pass, unit } = problem;
  const [enter, setEnter] = useState<string | number>('');

  useEffect(() => {
    if (enter == answer) {
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
      flexDirection="column"
      gap="0.2rem"
      alignContent="start"
      marginTop="1rem"
      position="relative"
    >
      {isSolved && <CorrectChecker isCorrect={isCorrect} />}
      <Box display="flex" gap="1rem">
        <CustomTypo fontSize="1.25rem"> {qNum}</CustomTypo>
        <CustomTypo fontSize="1.25rem">{q}</CustomTypo>
      </Box>
      <Box display="flex" justifyContent="end" width="60vw" gap="0.5rem">
        <CustomTypo fontSize="1.25rem"> 답 : </CustomTypo>
        <Input
          value={enter}
          onChange={e => setEnter(e.target.value)}
          style={{ width: '3rem', textAlign: 'center' }}
          disabled={isSolved}
        />
        <CustomTypo fontSize="1.25rem"> {unit} </CustomTypo>
      </Box>
    </Box>
  );
}
