import { useState } from 'react';
import { Box, Typography } from '@mui/material';

import ExampleBox from 'src/contents/common/example-box';
import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C141 from './C141';

import e141Image from 'src/contents/assets/image/P141/e_1-4-1.png';
export default function P141() {
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
      <ExampleBox>
        <img width="100%" src={e141Image} alt="fractionE141" />
      </ExampleBox>
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
    lSon: 3,
    lMom: 4,
    rSon: 4,
    cMom: 8,
    cSon: 7,
    pass: false,
  },
  {
    qId: 1,
    qNum: '②',
    lNature: 3,
    lMom: 5,
    lSon: 1,
    rSon: 2,
    cMom: 5,
    cSon: 8,
    pass: false,
  },
  {
    qId: 2,
    qNum: '③',
    lNature: 2,
    lMom: 5,
    lSon: 4,
    rSon: 7,
    cMom: 5,
    cSon: 2,
    pass: false,
  },
  {
    qId: 3,
    qNum: '④',
    lNature: 2,
    lSon: 2,
    lMom: 3,
    rSon: 5,
    cMom: 15,
    cSon: 8,
    pass: false,
  },
  {
    qId: 4,
    qNum: '⑤',
    lNature: 3,
    lMom: 2,
    lSon: 1,
    rSon: 7,
    cMom: 2,
    cSon: 1,
    pass: false,
  },
  {
    qId: 5,
    qNum: '⑥',
    lNature: 1,
    lSon: 3,
    lMom: 8,
    rSon: 5,
    cMom: 40,
    cSon: 11,
    pass: false,
  },
  {
    qId: 6,
    qNum: '⑦',
    lNature: 4,
    lMom: 2,
    lSon: 1,
    rSon: 9,
    cMom: 2,
    cSon: 1,
    pass: false,
  },
  {
    qId: 7,
    qNum: '⑧',
    lNature: 2,
    lSon: 2,
    lMom: 5,
    rSon: 5,
    cMom: 25,
    cSon: 12,
    pass: false,
  },
  {
    qId: 8,
    qNum: '⑨',
    lNature: 1,
    lMom: 9,
    lSon: 5,
    rSon: 6,
    cMom: 27,
    cSon: 7,
    pass: false,
  },
  {
    qId: 9,
    qNum: '⑩',
    lNature: 1,
    lSon: 1,
    lMom: 8,
    rSon: 3,
    cMom: 8,
    cSon: 3,
    pass: false,
  },
];
