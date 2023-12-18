import { useState } from 'react';
import { Box } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C121 from './C121';
import Example2Day from './E121';
export default function Page13() {
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
      title="(분수)÷(자연수)"
      question={`□에 알맞은 수를 써넣어 식을 계산하세요.`}
      day="day2"
    >
      <Example2Day />
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
                maxHeight: '200px',
                overflowY: 'auto',
                display: 'flex',
                width: 'calc(40% - 0.5rem)',
                justifyContent: 'center',
                margin: '0.5rem',
              }}
            >
              <C121
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
    mom: 8,
    son: 9,
    num: 4,
    rMom: 9,
    pass: false,
  },
  {
    qId: 1,
    qNum: '②',
    mom: 5,
    son: 6,
    num: 5,
    rMom: 6,
    pass: false,
  },
  {
    qId: 2,
    qNum: '③',
    mom: 5,
    son: 6,
    num: 3,
    rMom: 7,
    pass: false,
  },
  {
    qId: 3,
    qNum: '④',
    mom: 9,
    son: 4,
    num: 2,
    rMom: 9,
    pass: false,
  },
  {
    qId: 4,
    qNum: '⑤',
    mom: 3,
    son: 8,
    num: 2,
    rMom: 3,
    pass: false,
  },
  {
    qId: 5,
    qNum: '⑥',
    mom: 8,
    son: 15,
    num: 3,
    rMom: 8,
    pass: false,
  },
  {
    qId: 6,
    qNum: '⑦',
    mom: 11,
    son: 20,
    num: 5,
    rMom: 11,
    pass: false,
  },
  {
    qId: 7,
    qNum: '⑧',
    mom: 25,
    son: 21,
    num: 7,
    rMom: 25,
    pass: false,
  },
];
