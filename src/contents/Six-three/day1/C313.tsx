import { useEffect, useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import { NumberInput } from 'src/contents/common/number-box';
import { TextUnderBar } from 'src/contents/common/text-underbar';

import type { ProblemProp } from './P313';

interface C313Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C313(props: C313Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, pass, qNum, answer, imgSrc } = problem;

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
                ? '주머니 1개에 빨간색 사탕 5개, 파란색 사탕 4개를 넣어요.'
                : '필통 1개에 지우개가 2개, 연필이 1자루 들어 있어요.'}
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
                right={qId === 0 ? '19.2rem' : '18rem'}
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
                right={qId === 0 ? '15.2rem' : '14.1rem'}
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
                right={qId === 0 ? '11.3rem' : '22rem'}
                top={qId === 0 ? '2.7rem' : '5.4rem'}
              >
                <NumberInput
                  width="2.5rem"
                  value={a3}
                  onChange={e => setA3(e.target.value)}
                />
              </Box>
              <Box
                position="absolute"
                right={qId === 0 ? '15.2rem' : '18em'}
                top={qId === 0 ? '5.4rem' : '5.4rem'}
              >
                <NumberInput
                  width="2.5rem"
                  value={a4}
                  onChange={e => setA4(e.target.value)}
                />
              </Box>
              <Box
                position="absolute"
                right={qId === 0 ? '11.3rem' : '14.1rem'}
                top={qId === 0 ? '5.4rem' : '5.4rem'}
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
                    ? '빨간색 사탕의 수는 파란색 사탕의 수의'
                    : '지우개의 수는 연필의 수의'}
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
                    ? '파란색 사탕의 수는 빨간색 사탕의 수의'
                    : '연필의 수는 지우개의 수의'}
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
