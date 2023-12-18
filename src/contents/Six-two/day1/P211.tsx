import { useState } from 'react';
import { Box } from '@mui/material';

import ExampleBox from 'src/contents/common/example-box';
import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C211 from './C211';

import i211_1 from 'src/contents/assets/image/211-1.png';
import e211Image from 'src/contents/assets/image/e_2-1-1.png';

export default function P211() {
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
      title="나눗셈으로 분수를 소수로 고치기 - 개발중 "
      question={'빈칸을 채워서 분수를 소수로 바꾸세요.'}
      day="day1"
    >
      <ExampleBox>
        <img width="100%" src={e211Image} alt="fractionE122" />
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
              <C211
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
          $color="#FF6291"
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
    qI: 'src/contents/assets/image/211-1.png',
    answer: 0.2,
    pass: false,
  },
  {
    qId: 1,
    qNum: '②',
    qI: 'src/contents/assets/image/e_2-1-1.png',
    answer: 0.05,
    pass: false,
  },
  { qId: 2, qNum: '③', qI: 'i211_1', answer: 0.16, pass: false },
  { qId: 3, qNum: '④', qI: 'i211_1', answer: 0.14, pass: false },
];
