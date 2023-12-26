import { useEffect, useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import { NumberInput } from 'src/contents/common/number-box';

import type { ProblemProp } from './P431';

import ArrowRight from '../../assets/icon/arrowRight.svg';

interface C431Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C431(props: C431Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, pass, qNum, numList, answer } = problem;

  const [isCorrect, setIsCorrect] = useState(false);

  const [input1, setInput1] = useState<undefined | number>(undefined);
  const [input2, setInput2] = useState<undefined | number>(undefined);

  useEffect(() => {
    if (answer[0] === input1 && answer[0] === input2) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [isSolved, qId]);

  return (
    <Box display="flex" mb="5rem">
      <Box display="flex" alignItems="start" gap="1rem">
        <Box display="flex" alignItems="center" position="relative">
          {isSolved && <CorrectChecker isCorrect={isCorrect} />}
          <Typography variant="h5" fontWeight={600}>
            {qNum}
          </Typography>
        </Box>
        <Box display="flex" gap="0.3rem" alignItems="center">
          <NumberInput
            value={Number(input1)}
            onChange={e => {
              setInput1(Number(e.target.value));
            }}
          />
          <Avatar
            src={ArrowRight}
            variant="square"
            style={{
              width: '1.5rem',
              height: 'max-content',
              margin: '0rem 0.5rem',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
