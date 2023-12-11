import { useEffect, useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import { NumberInput } from 'src/contents/common/number-box';

import type { ProblemProp } from './P353';

import ArrowRight from '../../assets/icon/arrowRight.svg';

interface C353Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C353(props: C353Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, pass, qNum, imgSrc, candyNum, answer } = problem;

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
        <Box display="flex" alignItems="center">
          {isSolved && <CorrectChecker isCorrect={isCorrect} />}
          <Typography variant="h5" fontWeight={400} marginRight="1rem">
            {qNum}
          </Typography>
        </Box>
        <Box>
          {qId % 2 === 0 ? (
            <Typography variant="h5" fontWeight={400} marginBottom="1rem">
              주머니에 사탕이 {candyNum}개씩 들어 있습니다.
            </Typography>
          ) : (
            <Typography variant="h5" fontWeight={400} marginBottom="1rem">
              주머니에 사탕을 {candyNum}개씩 나누어 담았습니다.
            </Typography>
          )}

          <Box display="flex" gap="1rem" mb="2rem">
            <Avatar
              src={imgSrc}
              variant="square"
              style={{
                width: '12rem',
                height: 'max-content',
                marginRight: '1rem',
              }}
            />
            <Box display="flex" flexDirection="column" gap="1rem">
              <Box display="flex" gap="0.3rem" alignItems="center">
                <Typography variant="h6">
                  빨간색 주머니의 수와 파란색 주머니의 수의 비
                </Typography>
                <Avatar
                  src={ArrowRight}
                  variant="square"
                  style={{
                    width: '1rem',
                    height: 'max-content',
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
                  빨간색 사탕의 수와 파란색 사탕의 수의 비
                </Typography>
                <Avatar
                  src={ArrowRight}
                  variant="square"
                  style={{
                    width: '1rem',
                    height: 'max-content',
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
    </Box>
  );
}
