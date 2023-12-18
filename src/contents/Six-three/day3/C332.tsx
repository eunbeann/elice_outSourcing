import { useEffect, useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import { NumberInput } from 'src/contents/common/number-box';
import { TextUnderBar } from 'src/contents/common/text-underbar';

import type { ProblemProp } from './P332';

import ArrowRight from '../../assets/icon/arrowRight.svg';
import Circle from '../../assets/image/P332/circle.png';
import Star from '../../assets/image/P332/star.png';

interface C332Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C332(props: C332Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, pass, qNum, leftItem, rightItem, answer } = problem;

  const [isCorrect, setIsCorrect] = useState(false);

  const [firstInput, setFirstInput] = useState<string | undefined>(undefined);
  const [secondInput, setSecondInput] = useState<string | undefined>(undefined);
  useEffect(() => {
    if (answer[0] === firstInput && answer[1] === secondInput) {
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
              alignItems="center"
            >
              <Avatar
                src={Star}
                variant="square"
                style={{
                  width: '1.5rem',
                  height: 'max-content',
                  margin: '0rem 0.5rem',
                }}
              />
              의
              <Avatar
                src={Circle}
                variant="square"
                style={{
                  width: '1.5rem',
                  height: 'max-content',
                  margin: '0rem 0.5rem',
                }}
              />
              에 대한 비는 {leftItem}:{rightItem}
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
            <Typography
              variant="h5"
              fontWeight={600}
              display="flex"
              alignItems="center"
            >
              <Avatar
                src={Star}
                variant="square"
                style={{
                  width: '1.5rem',
                  height: 'max-content',
                  margin: '0rem 0.5rem',
                }}
              />
              은
              <Avatar
                src={Circle}
                variant="square"
                style={{
                  width: '1.5rem',
                  height: 'max-content',
                  margin: '0rem 0.5rem',
                }}
              />
              의
              <TextUnderBar
                width="4rem"
                value={firstInput ? firstInput : ''}
                onChange={e => setFirstInput(e.target.value)}
              />
              배,
              <Avatar
                src={Circle}
                variant="square"
                style={{
                  width: '1.5rem',
                  height: 'max-content',
                  margin: '0rem 0.5rem',
                }}
              />
              은
              <Avatar
                src={Star}
                variant="square"
                style={{
                  width: '1.5rem',
                  height: 'max-content',
                  margin: '0rem 0.5rem',
                }}
              />
              의
              <TextUnderBar
                width="4rem"
                value={secondInput ? secondInput : ''}
                onChange={e => setSecondInput(e.target.value)}
              />
              배
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
