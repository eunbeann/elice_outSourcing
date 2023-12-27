import { useState } from 'react';
import { Box } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C232 from './C232';

export default function P232() {
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
    natureNum: 4,
    sonNum: 1,
    momNum: 2,
    answer: 4.5,
    pass: false,
  },
  {
    qId: 1,
    qNum: '②',
    natureNum: 1,
    sonNum: 4,
    momNum: 5,
    answer: 1.8,
    pass: false,
  },
  {
    qId: 2,
    qNum: '③',
    natureNum: 3,
    sonNum: 1,
    momNum: 4,
    answer: 3.25,
    pass: false,
  },
  {
    qId: 3,
    qNum: '④',
    natureNum: 2,
    sonNum: 3,
    momNum: 8,
    answer: 2.375,
    pass: false,
  },
  {
    qId: 4,
    qNum: '⑤',
    natureNum: 1,
    sonNum: 9,
    momNum: 10,
    answer: 1.9,
    pass: false,
  },
  {
    qId: 5,
    qNum: '⑥',
    natureNum: 7,
    sonNum: 17,
    momNum: 20,
    answer: 7.85,
    pass: false,
  },
  {
    qId: 6,
    qNum: '⑦',
    natureNum: 6,
    sonNum: 21,
    momNum: 25,
    answer: 6.84,
    pass: false,
  },
  {
    qId: 7,
    qNum: '⑧',
    natureNum: 5,
    sonNum: 31,
    momNum: 50,
    answer: 5.62,
    pass: false,
  },
  {
    qId: 8,
    qNum: '⑨',
    natureNum: 2,
    sonNum: 89,
    momNum: 100,
    answer: 2.89,
    pass: false,
  },
  {
    qId: 9,
    qNum: '⑩',
    natureNum: 9,
    sonNum: 37,
    momNum: 125,
    answer: 9.296,
    pass: false,
  },
  {
    qId: 10,
    qNum: '⑪',
    natureNum: 4,
    sonNum: 250,
    momNum: 77,
    answer: 4.308,
    pass: false,
  },
  {
    qId: 11,
    qNum: '⑫',
    natureNum: 3,
    sonNum: 97,
    momNum: 500,
    answer: 3.194,
    pass: false,
  },
];
