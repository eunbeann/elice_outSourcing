import { useState } from 'react';
import { Box } from '@mui/material';

import ExampleBox from 'src/contents/common/example-box';
import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C221 from './C221';

import e221Image from 'src/contents/assets/image/P221/e_221.png';
export default function P221() {
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
      title="분모를 바꾸어 진분수를 소수로 고치기"
      question={'빈칸을 채워 분수를 소수로 바꾸세요.'}
      day="day2"
    >
      <ExampleBox>
        <img width="100%" src={e221Image} alt="fractionE122" />
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
                display: 'flex',
                width: '40%',
                justifyContent: 'left',
                margin: '0.5rem',
              }}
            >
              <C221
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
    sonNum: 4,
    momNum: 5,
    rSon: 8,
    rMom: 10,
    answer: 0.8,
    pass: false,
  },
  {
    qId: 1,
    qNum: '②',
    sonNum: 2,
    momNum: 25,
    rSon: 8,
    rMom: 100,
    answer: 0.08,
    pass: false,
  },
  {
    qId: 2,
    qNum: '③',
    sonNum: 9,
    momNum: 20,
    rSon: 45,
    rMom: 100,
    answer: 0.45,
    pass: false,
  },
  {
    qId: 3,
    qNum: '④',
    sonNum: 13,
    momNum: 50,
    rSon: 26,
    rMom: 100,
    answer: 0.26,
    pass: false,
  },
  {
    qId: 4,
    qNum: '⑤',
    sonNum: 9,
    momNum: 125,
    rSon: 72,
    rMom: 1000,
    answer: 0.072,
    pass: false,
  },
  {
    qId: 5,
    qNum: '⑥',
    sonNum: 6,
    momNum: 25,
    rSon: 24,
    rMom: 1000,
    answer: 0.024,
    pass: false,
  },
];
