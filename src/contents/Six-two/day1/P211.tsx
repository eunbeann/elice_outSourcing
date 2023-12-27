import { useState } from 'react';
import { Box, Typography } from '@mui/material';

import ExampleBox from 'src/contents/common/example-box';
import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C211 from './C211';

import e211Q1 from 'src/contents/assets/image/P211/211-1.png';
import e211Image from 'src/contents/assets/image/P211/e_2-1-1.png';

export default function P211() {
  const [isSolved, setIsSolved] = useState(false);
  const [passArray, setPassArray] = useState(
    divisionProblems.map(problem => problem.pass)
  );

  const handleCorrectChange = (qId: number, pass: boolean) => {
    setPassArray(prevPassArray => {
      const newPassArray = [...prevPassArray];
      newPassArray[qId] = pass;
      return newPassArray;
    });
  };

  const checkAnswer = () => {
    //TODO 점수 보내는 api 추가
    setIsSolved(prev => !prev);
  };
  return (
    <Layout
      title="나눗셈으로 분수를 소수로 고치기"
      question={'빈칸을 채워서 분수를 소수로 바꾸세요.'}
      day="day1"
    >
      <ExampleBox>
        <img width="100%" src={e211Image} alt="fractionE122" />
      </ExampleBox>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography fontSize="1.25rem">
          * 보기처럼 계산해보며 값을 구하세요.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {divisionProblems.map(problem => (
            <Box
              key={problem.qNum}
              sx={{
                display: 'flex',
                width: '40%',
                justifyContent: 'center',
                margin: '0.5rem',
              }}
            >
              <C211
                problem={problem}
                isSolved={isSolved}
                handleCorrectChange={(qId, pass) =>
                  handleCorrectChange(qId, pass)
                }
              />
            </Box>
          ))}
        </Box>
        <SubmitButton
          onClick={checkAnswer}
          $color="#FF6291"
          isSolved={isSolved}
        />
      </Box>
    </Layout>
  );
}

const divisionProblems = [
  { qId: 0, qNum: '①', sonNum: 1, momNum: 2, answer: 0.5, pass: false },
  { qId: 1, qNum: '②', sonNum: 3, momNum: 5, answer: 0.6, pass: false },
  { qId: 2, qNum: '③', sonNum: 3, momNum: 4, answer: 0.75, pass: false },
  { qId: 3, qNum: '④', sonNum: 3, momNum: 25, answer: 0.12, pass: false },
];
