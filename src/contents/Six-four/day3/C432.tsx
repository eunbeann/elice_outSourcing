import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import { NumberInput } from 'src/contents/common/number-box';
import VisualFraction from 'src/contents/common/visual-fraction';

import type { ProblemProp } from './P432';

interface C432Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C432(props: C432Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, pass, qNum, leftNum, rightNum, answer } = problem;

  const leftNumType =
    leftNum.length === 1 ? '소수' : leftNum.length === 2 ? '분수' : '대분수';
  const rightNumType =
    rightNum.length === 1 ? '소수' : rightNum.length === 2 ? '분수' : '대분수';

  const [isCorrect, setIsCorrect] = useState(false);

  const [input1, setInput1] = useState<undefined | number>(undefined);
  const [input2, setInput2] = useState<undefined | number>(undefined);

  useEffect(() => {
    if (answer[0] === input1 && answer[1] === input2) {
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
        <Box>
          <Box display="flex" mb="1rem" ml="0.5rem">
            <Box display="flex">
              <Typography
                variant="h5"
                display="flex"
                alignItems="center"
                gap="0.5rem"
              >
                <Typography
                  variant="h5"
                  fontWeight={600}
                  bgcolor="#fce3e7"
                  width="4rem"
                  height="4rem"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  border="1px solid black"
                >
                  {leftNumType === '소수' ? (
                    leftNum[0]
                  ) : leftNumType === '분수' ? (
                    <VisualFraction momNum={leftNum[1]} sonNum={leftNum[0]} />
                  ) : (
                    <>
                      {leftNum[0]}{' '}
                      <VisualFraction momNum={leftNum[2]} sonNum={leftNum[1]} />
                    </>
                  )}
                </Typography>
                :
                <Typography
                  variant="h5"
                  fontWeight={600}
                  bgcolor="#daecf6"
                  width="4rem"
                  height="4rem"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  border="1px solid black"
                >
                  {rightNumType === '소수' ? (
                    rightNum[0]
                  ) : rightNumType === '분수' ? (
                    <VisualFraction momNum={rightNum[1]} sonNum={rightNum[0]} />
                  ) : (
                    <>
                      {rightNum[0]}{' '}
                      <VisualFraction
                        momNum={rightNum[2]}
                        sonNum={rightNum[1]}
                      />
                    </>
                  )}
                </Typography>
                =
                <Typography
                  variant="h5"
                  fontWeight={600}
                  bgcolor="#fce3e7"
                  width="4rem"
                  height="4rem"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  border="1px solid black"
                >
                  <NumberInput
                    value={input1}
                    onChange={e => setInput1(Number(e.target.value))}
                  />
                </Typography>
                :
                <Typography
                  variant="h5"
                  fontWeight={600}
                  bgcolor="#daecf6"
                  width="4rem"
                  height="4rem"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  border="1px solid black"
                >
                  <NumberInput
                    value={input2}
                    onChange={e => setInput2(Number(e.target.value))}
                  />
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
