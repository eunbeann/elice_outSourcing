import { useState } from 'react';
import { Box, Typography } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C141 from './C141';

export default function P143() {
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
    <Layout title="÷(자연수)의 계산" question={`계산을 하세요.`} day="day4">
      <Typography> * 정답이 대분수일 경우 가분수로 고쳐 적습니다.</Typography>
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
              <C141
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
    lNature: 1,
    lSon: 4,
    lMom: 9,
    rSon: 2,
    cMom: 18,
    cSon: 13,
    pass: false,
  },
  {
    qId: 1,
    qNum: '②',
    lNature: 3,
    lMom: 5,
    lSon: 2,
    rSon: 7,
    cMom: 5,
    cSon: 1,
    pass: false,
  },
  {
    qId: 2,
    qNum: '③',
    lNature: 3,
    lMom: 2,
    lSon: 1,
    rSon: 6,
    cMom: 12,
    cSon: 7,
    pass: false,
  },
  {
    qId: 3,
    qNum: '④',
    lNature: 3,
    lSon: 7,
    lMom: 3,
    rSon: 9,
    cMom: 21,
    cSon: 8,
    pass: false,
  },
  {
    qId: 4,
    qNum: '⑤',
    lNature: 2,
    lMom: 4,
    lSon: 1,
    rSon: 4,
    cMom: 16,
    cSon: 9,
    pass: false,
  },
  {
    qId: 5,
    qNum: '⑥',
    lNature: 2,
    lSon: 3,
    lMom: 4,
    rSon: 3,
    cMom: 12,
    cSon: 11,
    pass: false,
  },
  {
    qId: 6,
    qNum: '⑦',
    lNature: 3,
    lMom: 7,
    lSon: 4,
    rSon: 5,
    cMom: 7,
    cSon: 5,
    pass: false,
  },
  {
    qId: 7,
    qNum: '⑧',
    lNature: 1,
    lSon: 1,
    lMom: 9,
    rSon: 4,
    cMom: 18,
    cSon: 5,
    pass: false,
  },
  {
    qId: 8,
    qNum: '⑨',
    lNature: 2,
    lMom: 3,
    lSon: 1,
    rSon: 4,
    cMom: 12,
    cSon: 7,
    pass: false,
  },
  {
    qId: 9,
    qNum: '⑩',
    lNature: 1,
    lSon: 3,
    lMom: 5,
    rSon: 2,
    cMom: 5,
    cSon: 4,
    pass: false,
  },
  {
    qId: 10,
    qNum: '⑪',
    lNature: 1,
    lSon: 3,
    lMom: 7,
    rSon: 6,
    cMom: 21,
    cSon: 5,
    pass: false,
  },
  {
    qId: 11,
    qNum: '⑫',
    lNature: 2,
    lSon: 5,
    lMom: 9,
    rSon: 3,
    cMom: 27,
    cSon: 23,
    pass: false,
  },
  {
    qId: 12,
    qNum: '⑬',
    lNature: 1,
    lSon: 5,
    lMom: 8,
    rSon: 4,
    cMom: 32,
    cSon: 13,
    pass: false,
  },
  {
    qId: 13,
    qNum: '⑭',
    lNature: 1,
    lSon: 7,
    lMom: 8,
    rSon: 8,
    cMom: 64,
    cSon: 15,
    pass: false,
  },
];
