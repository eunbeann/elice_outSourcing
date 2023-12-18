import { useState } from 'react';
import { Box } from '@mui/material';

import ExampleBox from 'src/contents/common/example-box';
import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C131 from './C131';

import e131Image from 'src/contents/assets/image/e_1-3-1.png';
export default function P133() {
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
    <Layout title="÷(자연수)의 계산" question={`계산을 하세요.`} day="day3">
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
                width: '30%',
                justifyContent: 'center',
                margin: '0.5rem',
              }}
            >
              <C131
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
    lSon: 4,
    rSon: 5,
    cMom: 5,
    cSon: 4,
    pass: false,
  },
  {
    qId: 1,
    qNum: '②',
    lMom: 2,
    lSon: 1,
    rSon: 3,
    cMom: 6,
    cSon: 1,
    pass: false,
  },
  {
    qId: 2,
    qNum: '③',
    lMom: 3,
    lSon: 20,
    rSon: 5,
    cMom: 3,
    cSon: 4,
    pass: false,
  },
  {
    qId: 3,
    qNum: '④',
    lMom: 5,
    lSon: 4,
    rSon: 8,
    cMom: 10,
    cSon: 1,
    pass: false,
  },
  {
    qId: 4,
    qNum: '⑤',
    lMom: 4,
    lSon: 15,
    rSon: 9,
    cMom: 12,
    cSon: 5,
    pass: false,
  },
  {
    qId: 5,
    qNum: '⑥',
    lSon: 9,
    lMom: 5,
    rSon: 6,
    cMom: 10,
    cSon: 3,
    pass: false,
  },
  {
    qId: 6,
    qNum: '⑦',
    lSon: 5,
    rSon: 10,
    cMom: 2,
    cSon: 1,
    pass: false,
  },
  {
    qId: 7,
    qNum: '⑧',
    lSon: 6,
    rSon: 14,
    cMom: 7,
    cSon: 3,
    pass: false,
  },
  {
    qId: 8,
    qNum: '⑨',
    lMom: 8,
    lSon: 5,
    rSon: 15,
    cMom: 24,
    cSon: 1,
    pass: false,
  },
  {
    qId: 9,
    qNum: '⑩',
    lSon: 18,
    lMom: 7,
    rSon: 12,
    cMom: 14,
    cSon: 3,
    pass: false,
  },
  {
    qId: 10,
    qNum: '⑪',
    lMom: 9,
    lSon: 8,
    rSon: 18,
    cMom: 81,
    cSon: 4,
    pass: false,
  },
  {
    qId: 11,
    qNum: '⑫',
    lSon: 14,
    rSon: 21,
    cMom: 3,
    cSon: 2,
    pass: false,
  },
  {
    qId: 12,
    qNum: '⑬',
    lMom: 10,
    lSon: 21,
    rSon: 14,
    cMom: 20,
    cSon: 3,
    pass: false,
  },
  {
    qId: 13,
    qNum: '⑭',
    lMom: 16,
    lSon: 25,
    rSon: 10,
    cMom: 32,
    cSon: 5,
    pass: false,
  },
  {
    qId: 14,
    qNum: '⑮',
    lSon: 2,
    lMom: 9,
    rSon: 5,
    cMom: 10,
    cSon: 9,
    pass: false,
  },
  {
    qId: 15,
    qNum: '⑯',
    lMom: 3,
    lSon: 10,
    rSon: 20,
    cMom: 6,
    cSon: 1,
    pass: false,
  },
  {
    qId: 16,
    qNum: '⑰',
    lMom: 8,
    lSon: 21,
    rSon: 7,
    cMom: 8,
    cSon: 3,
    pass: false,
  },
  {
    qId: 17,
    qNum: '⑱',
    lMom: 8,
    lSon: 15,
    rSon: 9,
    cMom: 24,
    cSon: 5,
    pass: false,
  },
];
