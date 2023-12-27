import { useState } from 'react';
import { Box } from '@mui/material';

import ExampleBox from 'src/contents/common/example-box';
import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C122 from './C122';
import E122 from './E122';

import e131Image from 'src/contents/assets/image/P131/e_1-3-1.png';
export default function P122() {
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
      <E122 />
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
                width: 'calc(40% - 0.5rem)',
                justifyContent: 'center',
                margin: '0.5rem',
              }}
            >
              <C122
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
    son: 6,
    mom1: 7,
    num: 4,
    mom2: 14,
    son2: 4,
    pass: false,
  },
  {
    qId: 1,
    qNum: '②',
    son: 3,
    mom1: 4,
    num: 2,
    mom2: 8,
    son2: 2,
    pass: false,
  },
  {
    qId: 2,
    qNum: '③',
    son: 5,
    mom1: 8,
    num: 4,
    mom2: 32,
    son2: 4,
    pass: false,
  },
  {
    qId: 3,
    qNum: '④',
    son: 8,
    mom1: 9,
    num: 3,
    mom2: 27,
    son2: 3,
    pass: false,
  },
  {
    qId: 4,
    qNum: '⑤',
    son: 6,
    mom1: 5,
    num: 9,
    mom2: 15,
    son2: 9,
    pass: false,
  },
  {
    qId: 5,
    qNum: '⑥',
    son: 10,
    mom1: 14,
    num: 4,
    mom2: 20,
    son2: 4,
    pass: false,
  },
  {
    qId: 6,
    qNum: '⑦',
    son: 8,
    mom1: 15,
    num: 6,
    mom2: 16,
    son2: 6,
    pass: false,
  },
  {
    qId: 7,
    qNum: '⑧',
    son: 7,
    mom1: 15,
    num: 10,
    mom2: 14,
    son2: 10,
    pass: false,
  },
];
