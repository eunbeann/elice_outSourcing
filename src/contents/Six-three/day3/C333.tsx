import { useEffect, useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import { NumberInput } from 'src/contents/common/number-box';
import { TextUnderBar } from 'src/contents/common/text-underbar';

import type { ProblemProp } from './P333';

interface C333Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C333(props: C333Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, pass, qNum, leftItem, rightItem, answer, imgSrc } = problem;

  const [isCorrect, setIsCorrect] = useState(false);

  const [input, setInput] = useState<string | undefined>(undefined);
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
    <Box>
      <Box display="flex" alignItems="start">
        <Box display="flex" alignItems="center" position="relative">
          {isSolved && <CorrectChecker isCorrect={isCorrect} />}
          <Typography variant="h5" fontWeight={600} marginRight="1rem">
            {qNum}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem">
          <Avatar
            src={imgSrc}
            variant="square"
            style={{
              width: '20rem',
              height: 'max-content',
              margin: '0rem 0.5rem',
            }}
          />
          <Box display="flex" alignItems="center">
            <Typography variant="h5" fontWeight={600}>
              {leftItem} 막대의 길이는 {rightItem} 막대의
            </Typography>
            <TextUnderBar
              width="4rem"
              value={input ? input : ''}
              onChange={e => setInput(e.target.value)}
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
