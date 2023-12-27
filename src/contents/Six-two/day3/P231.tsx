import { useState } from 'react';
import { Box } from '@mui/material';

import ExampleBox from 'src/contents/common/example-box';
import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C231 from './C231';

import e231Image from 'src/contents/assets/image/P231/2-3-1.png';
export default function P231() {
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
      question={'빈칸을 채워 분수를 소수로 바꾸세요.'}
      day="day3"
    >
      <ExampleBox>
        <img width="100%" src={e231Image} alt="fractionE122" />
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
              <C231
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
    natureNum: 2,
    sonNum: 3,
    momNum: 5,
    rSon: 6,
    rMom: 10,
    answer: 2.6,
    pass: false,
  },
  {
    qId: 1,
    qNum: '②',
    natureNum: 4,
    sonNum: 2,
    momNum: 25,
    rSon: 36,
    rMom: 100,
    answer: 4.36,
    pass: false,
  },
  {
    qId: 2,
    qNum: '③',
    natureNum: 8,
    sonNum: 7,
    momNum: 8,
    rSon: 875,
    rMom: 1000,
    answer: 8.875,
    pass: false,
  },
  {
    qId: 3,
    qNum: '④',
    natureNum: 5,
    sonNum: 13,
    momNum: 20,
    rSon: 65,
    rMom: 100,
    answer: 5.65,
    pass: false,
  },
  {
    qId: 4,
    qNum: '⑤',
    natureNum: 4,
    sonNum: 3,
    momNum: 4,
    rSon: 75,
    rMom: 100,
    answer: 4.75,
    pass: false,
  },
  {
    qId: 5,
    qNum: '⑥',
    natureNum: 2,
    sonNum: 6,
    momNum: 25,
    rSon: 24,
    rMom: 1000,
    answer: 2.024,
    pass: false,
  },
];
