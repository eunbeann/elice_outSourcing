import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import { TextUnderBar } from 'src/contents/common/text-underbar';
import VisualFraction from 'src/contents/common/visual-fraction';

import type { ProblemProp } from './P442';

interface C442Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C442(props: C442Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, pass, qNum, num1, num2, num3, num4, answer } = problem;

  const [isCorrect, setIsCorrect] = useState(false);

  const [input1, setInput1] = useState<undefined | string>(undefined);

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
    <Box display="flex">
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
            {num1 === 'blank' ? (
              <TextUnderBar
                width="5rem"
                value={input1 ? input1 : ''}
                onChange={e => {
                  setInput1(e.target.value);
                }}
              />
            ) : Array.isArray(num1) ? (
              <VisualFraction momNum={num1[1]} sonNum={num1[0]} />
            ) : (
              num1
            )}
            {' : '}
            {num2 === 'blank' ? (
              <TextUnderBar
                width="5rem"
                value={input1 ? input1 : ''}
                onChange={e => {
                  setInput1(e.target.value);
                }}
              />
            ) : Array.isArray(num2) ? (
              <VisualFraction momNum={num2[1]} sonNum={num2[0]} />
            ) : (
              num2
            )}
            {' = '}
            {num3 === 'blank' ? (
              <TextUnderBar
                width="5rem"
                value={input1 ? input1 : ''}
                onChange={e => {
                  setInput1(e.target.value);
                }}
              />
            ) : Array.isArray(num3) ? (
              <VisualFraction momNum={num3[1]} sonNum={num3[0]} />
            ) : (
              num3
            )}
            {' : '}
            {num4 === 'blank' ? (
              <TextUnderBar
                width="5rem"
                value={input1 ? input1 : ''}
                onChange={e => {
                  setInput1(e.target.value);
                }}
              />
            ) : Array.isArray(num4) ? (
              <VisualFraction momNum={num4[1]} sonNum={num4[0]} />
            ) : (
              num4
            )}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
