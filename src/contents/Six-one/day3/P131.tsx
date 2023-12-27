import { useState } from 'react';
import { Box } from '@mui/material';

import ExampleBox from 'src/contents/common/example-box';
import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C131 from './C131';

import e131Image from 'src/contents/assets/image/P131/e_1-3-1.png';
export default function P131() {
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
      <ExampleBox>
        <img width="100%" src={e131Image} alt="fractionE122" />
      </ExampleBox>
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
                width: '40%',
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
    lSon: 3,
    rSon: 4,
    cMom: 4,
    cSon: 3,
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
    lSon: 2,
    rSon: 6,
    cMom: 9,
    cSon: 1,
    pass: false,
  },
  {
    qId: 3,
    qNum: '④',
    lSon: 8,
    rSon: 9,
    cMom: 9,
    cSon: 8,
    pass: false,
  },
  {
    qId: 4,
    qNum: '⑤',
    lMom: 7,
    lSon: 4,
    rSon: 4,
    cMom: 7,
    cSon: 1,
    pass: false,
  },
  {
    qId: 5,
    qNum: '⑥',
    lSon: 5,
    rSon: 10,
    cMom: 2,
    cSon: 1,
    pass: false,
  },
  {
    qId: 6,
    qNum: '⑦',
    lMom: 5,
    lSon: 4,
    rSon: 2,
    cMom: 5,
    cSon: 2,
    pass: false,
  },
  {
    qId: 7,
    qNum: '⑧',
    lSon: 6,
    rSon: 8,
    cMom: 4,
    cSon: 3,
    pass: false,
  },
  {
    qId: 8,
    qNum: '⑨',
    lMom: 10,
    lSon: 3,
    rSon: 9,
    cMom: 30,
    cSon: 1,
    pass: false,
  },
  {
    qId: 9,
    qNum: '⑩',
    lSon: 16,
    rSon: 20,
    cMom: 5,
    cSon: 4,
    pass: false,
  },
  {
    qId: 10,
    qNum: '⑪',
    lMom: 5,
    lSon: 4,
    rSon: 10,
    cMom: 25,
    cSon: 2,
    pass: false,
  },
  {
    qId: 11,
    qNum: '⑫',
    lSon: 12,
    rSon: 18,
    cMom: 3,
    cSon: 2,
    pass: false,
  },
  {
    qId: 12,
    qNum: '⑬',
    lMom: 15,
    lSon: 11,
    rSon: 22,
    cMom: 30,
    cSon: 1,
    pass: false,
  },
  {
    qId: 13,
    qNum: '⑭',
    lMom: 8,
    lSon: 7,
    rSon: 7,
    cMom: 8,
    cSon: 1,
    pass: false,
  },
];
