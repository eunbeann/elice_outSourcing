import { useState } from 'react';
import { Box } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C232 from './C232';

export default function P233() {
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
      title="분모를 바꾸어 대분수를 소수로 고치기"
      question={'분수를 소수로 바꾸세요.'}
      day="day3"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
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
              <C232
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
          $color="#FF7613"
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
    natureNum: 3,
    sonNum: 1,
    momNum: 2,
    answer: 3.5,
    pass: false,
  },
  {
    qId: 1,
    qNum: '②',
    natureNum: 2,
    sonNum: 2,
    momNum: 5,
    answer: 2.4,
    pass: false,
  },
  {
    qId: 2,
    qNum: '③',
    natureNum: 7,
    sonNum: 2,
    momNum: 5,
    answer: 7.4,
    pass: false,
  },
  {
    qId: 3,
    qNum: '④',
    natureNum: 1,
    sonNum: 7,
    momNum: 8,
    answer: 1.875,
    pass: false,
  },
  {
    qId: 4,
    qNum: '⑤',
    natureNum: 6,
    sonNum: 19,
    momNum: 20,
    answer: 6.95,
    pass: false,
  },
  {
    qId: 5,
    qNum: '⑥',
    natureNum: 4,
    sonNum: 3,
    momNum: 10,
    answer: 4.3,
    pass: false,
  },
  {
    qId: 6,
    qNum: '⑦',
    natureNum: 5,
    sonNum: 23,
    momNum: 25,
    answer: 5.92,
    pass: false,
  },
  {
    qId: 7,
    qNum: '⑧',
    natureNum: 8,
    sonNum: 37,
    momNum: 50,
    answer: 8.74,
    pass: false,
  },
  {
    qId: 8,
    qNum: '⑨',
    natureNum: 2,
    sonNum: 67,
    momNum: 100,
    answer: 2.67,
    pass: false,
  },
  {
    qId: 9,
    qNum: '⑩',
    natureNum: 7,
    sonNum: 29,
    momNum: 125,
    answer: 7.632,
    pass: false,
  },
  {
    qId: 10,
    qNum: '⑪',
    natureNum: 4,
    sonNum: 129,
    momNum: 200,
    answer: 4.645,
    pass: false,
  },
  {
    qId: 11,
    qNum: '⑫',
    natureNum: 9,
    sonNum: 191,
    momNum: 250,
    answer: 9.764,
    pass: false,
  },
];
