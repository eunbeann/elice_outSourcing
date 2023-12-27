import { useState } from 'react';
import { Box, Typography } from '@mui/material';

import ExampleBox from 'src/contents/common/example-box';
import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C241 from './C241';

import e241Image from 'src/contents/assets/image/P241/2-4-1.png';

export default function P241() {
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
      title="소수를 분수로 고치기"
      question={'빈칸을 채워 소수를 분수로 바꾸세요.'}
      day="day4"
    >
      <ExampleBox>
        <img width="100%" src={e241Image} alt="fractionE122" />
      </ExampleBox>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography marginTop="1rem" fontSize="1.25rem">
          정답은 기약분수로 적습니다.
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
              <C241
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
          $color="#8F6CFF"
          isSolved={isSolved}
        />
      </Box>
    </Layout>
  );
}

const divisionProblems = [
  {
    qId: 0,
    qNum: '①',
    sonNum: 17,
    momNum: 20,
    answer: 0.85,
    pass: false,
  },
  {
    qId: 1,
    qNum: '②',
    nature: 4,
    sonNum: 1,
    momNum: 8,
    answer: 4.125,
    pass: false,
  },
  {
    qId: 2,
    qNum: '③',
    nature: 6,
    sonNum: 1,
    momNum: 4,
    answer: 6.25,
    pass: false,
  },
  {
    qId: 3,
    qNum: '④',
    nature: 3,
    sonNum: 1,
    momNum: 2,
    answer: 3.5,
    pass: false,
  },
  {
    qId: 4,
    qNum: '⑤',
    sonNum: 7,
    momNum: 8,
    answer: 0.875,
    pass: false,
  },
  {
    qId: 5,
    qNum: '⑥',
    nature: 1,
    sonNum: 13,
    momNum: 20,
    answer: 1.65,
    pass: false,
  },
  {
    qId: 6,
    qNum: '⑦',
    nature: 4,
    sonNum: 6,
    momNum: 125,
    answer: 4.048,
    pass: false,
  },
  {
    qId: 7,
    qNum: '⑧',
    nature: 7,
    sonNum: 191,
    momNum: 200,
    answer: 7.955,
    pass: false,
  },
  {
    qId: 8,
    qNum: '⑨',
    nature: 1,
    sonNum: 57,
    momNum: 200,
    answer: 1.285,
    pass: false,
  },
  {
    qId: 9,
    qNum: '⑩',
    nature: 8,
    sonNum: 221,
    momNum: 500,
    answer: 8.442,
    pass: false,
  },
];
