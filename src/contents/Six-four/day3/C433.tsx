import { useEffect, useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import { NumberInput } from 'src/contents/common/number-box';
import VisualFraction from 'src/contents/common/visual-fraction';

import type { ProblemProp } from './P433';

import ArrowRightRed from '../../assets/icon/arrowRightRed.png';
import BlueBook from '../../assets/image/P433/blueBook.png';
import RedBook from '../../assets/image/P433/redBook.png';
import YellowBook from '../../assets/image/P433/yellowBook.png';

interface C433Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C433(props: C433Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, pass, qNum, leftNum, rightNum, answer } = problem;

  const leftNumType = leftNum.length === 1 ? '소수' : '분수';
  const rightNumType = rightNum.length === 1 ? '소수' : '분수';

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
        <Box
          display="flex"
          flexDirection="column"
          gap="1rem"
          position="relative"
        >
          <Box>
            <Avatar
              src={
                qId % 3 === 0 ? BlueBook : qId % 3 === 1 ? YellowBook : RedBook
              }
              variant="square"
              style={{
                width: '10rem',
                height: 'max-content',
                margin: '0rem 0.5rem',
              }}
            />
            <Typography
              variant="h5"
              fontWeight={600}
              display="flex"
              position="absolute"
              top="0.8rem"
              left="2.2rem"
            >
              {leftNumType === '소수' ? (
                leftNum[0]
              ) : (
                <VisualFraction momNum={leftNum[1]} sonNum={leftNum[0]} />
              )}
            </Typography>
            <Typography
              variant="h5"
              fontWeight={600}
              display="flex"
              position="absolute"
              top="0.8rem"
              left="6.2rem"
            >
              {rightNumType === '소수' ? (
                rightNum[0]
              ) : (
                <VisualFraction momNum={rightNum[1]} sonNum={rightNum[0]} />
              )}
            </Typography>
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
