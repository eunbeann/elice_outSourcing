import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import { NumberInput } from 'src/contents/common/number-box';
import VisualFraction from 'src/contents/common/visual-fraction';

import type { ProblemProp } from './P452';

interface C452Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C452(props: C452Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, pass, qNum, answer } = problem;

  const [isCorrect, setIsCorrect] = useState(false);

  const [input, setInput] = useState<undefined | number>(undefined);

  useEffect(() => {
    if (answer === input) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [isSolved, qId]);

  return (
    <Box display="flex">
      <Box display="flex" alignItems="center" gap="1rem">
        <Box display="flex" alignItems="center" position="relative">
          {isSolved && <CorrectChecker isCorrect={isCorrect} />}
          <Typography variant="h5" fontWeight={600}>
            {qNum}
          </Typography>
        </Box>
        <Box display="flex" gap="0.3rem" alignItems="center">
          <NumberInput
            value={input}
            onChange={e => setInput(Number(e.target.value))}
          />
        </Box>
      </Box>
    </Box>
  );
}
