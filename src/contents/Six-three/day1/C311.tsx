import { useEffect, useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import { NumberInput } from 'src/contents/common/number-box';
import { TextUnderBar } from 'src/contents/common/text-underbar';

import type { ProblemProp } from './P311';

import ArrowRight from '../../assets//icon/arrowRight.svg';

interface C311Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C311(props: C311Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, pass, qNum, leftItem, rightItem, answer } = problem;

  const [isCorrect, setIsCorrect] = useState(false);

  const [firstInput, setFirstInput] = useState<string | undefined>(undefined);
  const [secondInput, setSecondInput] = useState<string | undefined>(undefined);
  const [thirdInput, setThirdInput] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (
      answer[0] === firstInput &&
      answer[0] === secondInput &&
      answer[1] === thirdInput
    ) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [isSolved, qId]);

  return (
    <Box>
      <Box display="flex" alignItems="start">
        <Box display="flex" alignItems="center" position="relative">
          {isSolved && <CorrectChecker isCorrect={isCorrect} />}
          <Typography variant="h5" fontWeight={600} marginRight="1rem">
            {qNum}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" gap="2rem">
          <Box display="flex">
            <Typography variant="h5" fontWeight={600}>
              {leftItem} ÷ {rightItem} =
            </Typography>
            <TextUnderBar
              width="4rem"
              value={firstInput ? firstInput : ''}
              onChange={e => setFirstInput(e.target.value)}
            />
          </Box>
          <Box display="flex" marginLeft="-2.5rem">
            <Avatar
              src={ArrowRight}
              variant="square"
              style={{
                width: '1.5rem',
                height: 'max-content',
                margin: '0rem 0.5rem',
              }}
            />
            <Typography variant="h5" fontWeight={600}>
              {leftItem}는 {rightItem}의
            </Typography>
            <TextUnderBar
              width="4rem"
              value={secondInput ? secondInput : ''}
              onChange={e => setSecondInput(e.target.value)}
            />
            <Typography variant="h5" fontWeight={600}>
              배, {rightItem}는 {leftItem}의
            </Typography>
            <TextUnderBar
              width="4rem"
              value={thirdInput ? thirdInput : ''}
              onChange={e => setThirdInput(e.target.value)}
            />
            <Typography variant="h5" fontWeight={600}>
              배
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
