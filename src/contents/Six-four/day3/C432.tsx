import { useEffect, useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import { NumberInput } from 'src/contents/common/number-box';
import VisualFraction from 'src/contents/common/visual-fraction';

import type { ProblemProp } from './P432';

import ArrowRightRed from '../../assets/icon/arrowRightRed.png';

interface C432Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C432(props: C432Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, pass, qNum, leftNum, rightNum, answer } = problem;

  const leftNumType =
    leftNum.length === 2 ? '소수' : leftNum.length === 4 ? '분수' : '대분수';
  const rightNumType =
    rightNum.length === 2 ? '소수' : rightNum.length === 4 ? '분수' : '대분수';

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
            <Box display="flex" flexDirection="column">
              <Typography
                variant="h5"
                fontWeight={600}
                bgcolor="#f9d590"
                width="6rem"
                height="2.5rem"
                display="flex"
                justifyContent="center"
                alignItems="center"
                border="1px solid black"
              >
                전항
              </Typography>
              <Typography
                variant="h5"
                fontWeight={600}
                width="6rem"
                height="5rem"
                display="flex"
                justifyContent="center"
                alignItems="center"
                border="1px solid black"
                borderTop="none"
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
            </Box>
          </Box>
          <Box display="flex" gap="0.3rem" alignItems="center">
            <Avatar
              src={ArrowRightRed}
              variant="square"
              style={{
                width: '1.5rem',
                height: 'max-content',
                margin: '0rem 0.5rem',
              }}
            />
            <Typography variant="h5" fontWeight={600} display="flex">
              <NumberInput
                value={Number(input1)}
                onChange={e => {
                  setInput1(Number(e.target.value));
                }}
              />
              :
              <NumberInput
                value={Number(input2)}
                onChange={e => {
                  setInput2(Number(e.target.value));
                }}
              />
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
