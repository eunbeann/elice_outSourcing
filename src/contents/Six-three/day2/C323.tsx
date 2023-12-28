import { useEffect, useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import { TextUnderBar } from 'src/contents/common/text-underbar';

import type { ProblemProp } from './P323';

interface C323Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C323(props: C323Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, pass, qNum, imgSrc, answer } = problem;

  const [isCorrect, setIsCorrect] = useState(false);

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

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
    <Box>
      <Box display="flex" alignItems="start" mb="4rem">
        <Box display="flex" alignItems="center" position="relative">
          {isSolved && <CorrectChecker isCorrect={isCorrect} />}
          <Typography variant="h5" fontWeight={400} marginRight="1rem">
            {qNum}
          </Typography>
        </Box>
        <Box display="flex" gap="1rem" alignItems="end">
          <Avatar
            src={imgSrc}
            variant="square"
            style={{
              width: '13rem',
              height: 'max-content',
            }}
          />
          <TextUnderBar
            width="4rem"
            value={input1}
            onChange={e => setInput1(e.target.value)}
          />
          <Typography variant="h5" fontWeight={400}>
            {':'}
          </Typography>

          <TextUnderBar
            width="4rem"
            value={input2}
            onChange={e => setInput2(e.target.value)}
          />
        </Box>
      </Box>
    </Box>
  );
}
