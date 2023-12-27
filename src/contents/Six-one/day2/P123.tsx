import { useState } from 'react';
import { Box, Typography } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C123 from './C123';

export default function P123() {
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
    <Layout title="(분수)÷(자연수)" question={`계산을 하세요.`} day="day2">
      <Typography>대분수는 가분수로 바꾸어 적습니다.</Typography>
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
                width: 'calc(40% - 0.5rem)',
                justifyContent: 'center',
                margin: '0.5rem',
              }}
            >
              <C123
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
          $color="#6297FF"
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
    mom: 9,
    son: 8,
    nature: 2,
    aMom: 9,
    aSon: 4,
    pass: false,
  },
  {
    qId: 1,
    qNum: '②',
    mom: 7,
    son: 6,
    nature: 3,
    aMom: 7,
    aSon: 2,
    pass: false,
  },
  {
    qId: 2,
    qNum: '③',
    mom: 9,
    son: 5,
    nature: 5,
    aMom: 9,
    aSon: 1,
    pass: false,
  },
  {
    qId: 3,
    qNum: '④',
    mom: 13,
    son: 9,
    nature: 3,
    aMom: 13,
    aSon: 3,
    pass: false,
  },
  {
    qId: 4,
    qNum: '⑤',
    mom: 10,
    son: 9,
    nature: 9,
    aMom: 10,
    aSon: 1,
    pass: false,
  },
  {
    qId: 5,
    qNum: '⑥',
    mom: 9,
    son: 8,
    nature: 3,
    aMom: 27,
    aSon: 8,
    pass: false,
  },
  {
    qId: 6,
    qNum: '⑦',
    mom: 7,
    son: 5,
    nature: 2,
    aMom: 14,
    aSon: 5,
    pass: false,
  },
  {
    qId: 7,
    qNum: '⑧',
    mom: 11,
    son: 6,
    nature: 4,
    aMom: 22,
    aSon: 3,
    pass: false,
  },
  {
    qId: 8,
    qNum: '⑨',
    mom: 9,
    son: 14,
    nature: 4,
    aMom: 18,
    aSon: 7,
    pass: false,
  },
  {
    qId: 9,
    qNum: '⑩',
    mom: 6,
    son: 13,
    nature: 2,
    aMom: 13,
    aSon: 12,
    pass: false,
  },
  {
    qId: 10,
    qNum: '⑪',
    mom: 7,
    son: 12,
    nature: 6,
    aMom: 7,
    aSon: 2,
    pass: false,
  },
  {
    qId: 11,
    qNum: '⑫',
    mom: 3,
    son: 14,
    nature: 7,
    aMom: 3,
    aSon: 2,
    pass: false,
  },
  {
    qId: 12,
    qNum: '⑬',
    mom: 2,
    son: 9,
    nature: 4,
    aMom: 8,
    aSon: 9,
    pass: false,
  },
  {
    qId: 13,
    qNum: '⑭',
    mom: 4,
    son: 15,
    nature: 6,
    aMom: 8,
    aSon: 5,
    pass: false,
  },
];
