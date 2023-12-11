import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { ArrowForward } from '@mui/icons-material';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import DivisionInput, { NumberInput } from 'src/contents/common/number-box';
import { NumberUnderBar } from 'src/contents/common/number-underbar';
import { TextUnderBar } from 'src/contents/common/text-underbar';
import VisualFraction from 'src/contents/common/visual-fraction';

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

  const [input, setInput] = useState('');

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
      <Box display="flex" alignItems="start" mb="4rem">
        <Box display="flex" alignItems="center">
          {isSolved && <CorrectChecker isCorrect={isCorrect} />}
          <Typography variant="h5" fontWeight={400} marginRight="1rem">
            {qNum}
          </Typography>
        </Box>
        <Box display="flex" gap="2rem" alignItems="end">
          <Avatar
            src={imgSrc}
            variant="square"
            style={{
              width: 'max-content',
              height: 'max-content',
            }}
          />
          <TextUnderBar
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </Box>
      </Box>
    </Box>
  );
}
