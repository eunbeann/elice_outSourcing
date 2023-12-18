import { useState } from 'react';
import { Box, Typography } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C141 from './C141';
export default function P142() {
  // 색칠 문제
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
      title="÷(자연수)의 계산"
      question={`(대분수)÷(자연수)를 계산 하세요.`}
      day="day4"
    >
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
    lNature: 2,
    lSon: 1,
    lMom: 3,
    rSon: 2,
    cMom: 6,
    cSon: 7,
    pass: false,
  },
  {
    qId: 1,
    qNum: '②',
    lNature: 1,
    lMom: 2,
    lSon: 1,
    rSon: 3,
    cMom: 2,
    cSon: 1,
    pass: false,
  },
  {
    qId: 2,
    qNum: '③',
    lNature: 2,
    lMom: 4,
    lSon: 3,
    rSon: 2,
    cMom: 8,
    cSon: 11,
    pass: false,
  },
  {
    qId: 3,
    qNum: '④',
    lNature: 2,
    lSon: 2,
    lMom: 5,
    rSon: 4,
    cMom: 5,
    cSon: 3,
    pass: false,
  },
];
