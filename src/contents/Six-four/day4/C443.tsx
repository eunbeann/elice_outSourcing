import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import { NumberInput } from 'src/contents/common/number-box';
import VisualFraction from 'src/contents/common/visual-fraction';

import type { ProblemProp } from './P443';

interface C443Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C443(props: C443Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, pass, qNum, numList, answer } = problem;

  const [isCorrect, setIsCorrect] = useState(false);

  const [input1, setInput1] = useState<undefined | number>(undefined);

  useEffect(() => {
    if (answer === input1) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [isSolved, qId]);

  return (
    <Box display="flex" mb="5rem">
      <Box display="flex" alignItems="center" gap="1rem">
        <Box display="flex" alignItems="center" position="relative">
          {isSolved && <CorrectChecker isCorrect={isCorrect} />}
          <Typography variant="h5" fontWeight={600}>
            {qNum}
          </Typography>
        </Box>
        <Box display="flex" gap="0.3rem" alignItems="center">
          <Typography
            variant="h5"
            fontWeight={600}
            display="flex"
            alignItems="center"
            gap="0.5rem"
          >
            <Box>
              {numList[0] === 'blank' ? (
                <NumberInput
                  value={input1}
                  onChange={e => setInput1(Number(e.target.value))}
                />
              ) : (
                numList[0]
              )}
            </Box>
            {':'}
            <Box>
              {numList[1] === 'blank' ? (
                <NumberInput
                  value={input1}
                  onChange={e => setInput1(Number(e.target.value))}
                />
              ) : (
                numList[1]
              )}
            </Box>
            {'='}
            <Box>
              {numList[2] === 'blank' ? (
                <NumberInput
                  value={input1}
                  onChange={e => setInput1(Number(e.target.value))}
                />
              ) : (
                numList[2]
              )}
            </Box>
            {':'}
            <Box>
              {numList[3] === 'blank' ? (
                <NumberInput
                  value={input1}
                  onChange={e => setInput1(Number(e.target.value))}
                />
              ) : (
                numList[3]
              )}
            </Box>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
