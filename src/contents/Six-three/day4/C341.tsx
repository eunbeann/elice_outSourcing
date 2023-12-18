import { useEffect, useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import { NumberInput } from 'src/contents/common/number-box';
import { TextUnderBar } from 'src/contents/common/text-underbar';
import VisualFraction from 'src/contents/common/visual-fraction';

import type { ProblemProp } from './P341';

import ArrowRight from '../../assets//icon/arrowRight.svg';

interface C341Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C341(props: C341Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, pass, qNum, isFraction, leftItem, rightItem, answer } = problem;

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
        <Box display="flex" flexDirection="column" gap="2rem">
          <Box display="flex">
            <Typography
              variant="h5"
              fontWeight={600}
              display="flex"
              gap="0.2rem"
              alignItems="center"
            >
              {isFraction ? (
                <VisualFraction
                  momNum={leftItem[1]}
                  sonNum={leftItem[0]}
                  fontSize="20rem"
                />
              ) : (
                leftItem
              )}
              :
              {isFraction ? (
                <VisualFraction momNum={rightItem[1]} sonNum={rightItem[0]} />
              ) : (
                rightItem
              )}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" marginLeft="-2.5rem">
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
              비교하는 양은 기준량의
            </Typography>
            <TextUnderBar
              width="5rem"
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
