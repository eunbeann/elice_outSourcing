import { useEffect, useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import { NumberInput } from 'src/contents/common/number-box';

import type { ProblemProp } from './P351';

import ArrowRight from '../../assets/icon/arrowRight.svg';

interface C351Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C351(props: C351Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, pass, qNum, imgSrc, answer } = problem;

  const [isCorrect, setIsCorrect] = useState(false);

  const [firstMom, setFirstMom] = useState<number | undefined>(undefined);
  const [firstSon, setFirstSon] = useState<number | undefined>(undefined);
  const [secondMom, setSecondMom] = useState<number | undefined>(undefined);
  const [secondSon, setSecondSon] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (
      answer.firstMom === firstMom &&
      answer.firstSon === firstSon &&
      answer.secondMom === secondMom &&
      answer.secondSon === secondSon
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
          <Typography variant="h5" fontWeight={400} marginRight="1rem">
            {qNum}
          </Typography>
        </Box>
        <Box display="flex" gap="1rem" mb="2rem">
          <Avatar
            src={imgSrc}
            variant="square"
            style={{
              width: '12rem',
              height: 'max-content',
            }}
          />
          <Box display="flex" flexDirection="column" gap="1rem">
            <Box display="flex" gap="0.3rem" alignItems="center">
              <Typography variant="h6">사과의 수와 바나나의 수의 비</Typography>
              <Avatar
                src={ArrowRight}
                variant="square"
                style={{
                  width: '1.5rem',
                  height: 'max-content',
                  margin: '0rem 0.5rem',
                }}
              />
              <NumberInput
                value={Number(firstMom)}
                onChange={e => {
                  setFirstMom(Number(e.target.value));
                }}
              />
              :
              <NumberInput
                value={Number(firstSon)}
                onChange={e => {
                  setFirstSon(Number(e.target.value));
                }}
              />
            </Box>
            <Box display="flex" gap="0.3rem" alignItems="center">
              <Typography variant="h6">
                사과 묶음의 수와 바나나 묶음의 수의 비
              </Typography>
              <Avatar
                src={ArrowRight}
                variant="square"
                style={{
                  width: '1.5rem',
                  height: 'max-content',
                  margin: '0rem 0.5rem',
                }}
              />
              <NumberInput
                value={Number(secondMom)}
                onChange={e => {
                  setSecondMom(Number(e.target.value));
                }}
              />
              :
              <NumberInput
                value={Number(secondSon)}
                onChange={e => {
                  setSecondSon(Number(e.target.value));
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
