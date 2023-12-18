import { useEffect, useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import { NumberInput } from 'src/contents/common/number-box';
import { TextUnderBar } from 'src/contents/common/text-underbar';

import type { ProblemProp } from './P312';

interface C312Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C312(props: C312Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, pass, qNum, seedNum, answer, imgSrc } = problem;

  const [isCorrect, setIsCorrect] = useState(false);

  const [a1, setA1] = useState<string | undefined>(undefined);
  const [a2, setA2] = useState<string | undefined>(undefined);
  const [a3, setA3] = useState<string | undefined>(undefined);
  const [a4, setA4] = useState<string | undefined>(undefined);
  const [a5, setA5] = useState<string | undefined>(undefined);
  const [a6, setA6] = useState<string | undefined>(undefined);
  const [a7, setA7] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (
      answer[0] === a1 &&
      answer[1] === a2 &&
      answer[2] === a3 &&
      answer[3] === a4 &&
      answer[4] === a5 &&
      answer[5] === a6 &&
      answer[6] === a7
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
        <Box display="flex" position="relative">
          {isSolved && <CorrectChecker isCorrect={isCorrect} />}
          <Typography variant="h5" fontWeight={600} marginRight="1rem">
            {qNum}
          </Typography>
          <Box display="flex" flexDirection="column">
            <Typography variant="h5" fontWeight={600} mb="2rem">
              {qId === 0
                ? '사과 3개와 바나나 2개를 넣어 주스 1병을 만들어요.'
                : '여학생 4명, 남학생 2명이 모여 모둠 하나를 만들어요.'}
            </Typography>
            <Box position="relative">
              <Avatar
                src={imgSrc}
                variant="square"
                style={{
                  width: '45rem',
                  height: 'max-content',
                  margin: '0rem 0.8rem',
                }}
              />
              <Box
                position="absolute"
                right={qId === 0 ? '23rem' : '22.2rem'}
                top={qId === 0 ? '2.7rem' : '2.8rem'}
              >
                <NumberInput
                  width="2.5rem"
                  value={a1}
                  onChange={e => setA1(e.target.value)}
                />
              </Box>
              <Box
                position="absolute"
                right={qId === 0 ? '19.3rem' : '18.2rem'}
                top={qId === 0 ? '2.7rem' : '2.8rem'}
              >
                <NumberInput
                  width="2.5rem"
                  value={a2}
                  onChange={e => setA2(e.target.value)}
                />
              </Box>
              <Box
                position="absolute"
                right={qId === 0 ? '15.5rem' : '14.3rem'}
                top={qId === 0 ? '2.7rem' : '2.8rem'}
              >
                <NumberInput
                  width="2.5rem"
                  value={a3}
                  onChange={e => setA3(e.target.value)}
                />
              </Box>
              <Box
                position="absolute"
                right={qId === 0 ? '19.3rem' : '18.2rem'}
                top={qId === 0 ? '5.2rem' : '5.4rem'}
              >
                <NumberInput
                  width="2.5rem"
                  value={a4}
                  onChange={e => setA4(e.target.value)}
                />
              </Box>
              <Box
                position="absolute"
                right={qId === 0 ? '15.5rem' : '14.3rem'}
                top={qId === 0 ? '5.2rem' : '5.4rem'}
              >
                <NumberInput
                  width="2.5rem"
                  value={a5}
                  onChange={e => setA5(e.target.value)}
                />
              </Box>
            </Box>
            <Box display="flex" flexDirection="column">
              <Box display="flex" mt="2rem">
                <Typography variant="h5" fontWeight={600}>
                  {qId === 0
                    ? '사과의 수는 바나나의 수의'
                    : '여학생의 수는 남학생의 수의'}
                </Typography>
                <TextUnderBar
                  width="4rem"
                  value={a6 ? a6 : ''}
                  onChange={e => setA6(e.target.value)}
                />
                <Typography variant="h5" fontWeight={600}>
                  배예요.
                </Typography>
              </Box>
              <Box display="flex" mt="2rem">
                <Typography variant="h5" fontWeight={600}>
                  {qId === 0
                    ? '바나나의 수는 사과의 수의'
                    : '남학생의 수는 여학생의 수의'}
                </Typography>
                <TextUnderBar
                  width="4rem"
                  value={a7 ? a7 : ''}
                  onChange={e => setA7(e.target.value)}
                />
                <Typography variant="h5" fontWeight={600}>
                  배예요.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
