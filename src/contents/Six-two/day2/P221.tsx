import { useState } from 'react';
import { Box } from '@mui/material';

import ExampleBox from 'src/contents/common/example-box';
import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C222 from './C222';

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
      title="분모를 바꾸어 진분수를 소수로 고치기 - 작업중"
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
                maxHeight: '200px',
                overflowY: 'auto',
                display: 'flex',
                width: '40%',
                justifyContent: 'center',
                margin: '0.5rem',
              }}
            >
              <C222
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
  { qId: 0, qNum: '①', sonNum: 4, momNum: 5, answer: 0.2, pass: false },
  { qId: 1, qNum: '②', sonNum: 5, momNum: 8, answer: 0.625, pass: false },
  { qId: 2, qNum: '③', sonNum: 1, momNum: 2, answer: 0.5, pass: false },
  { qId: 3, qNum: '④', sonNum: 3, momNum: 4, answer: 0.75, pass: false },
  { qId: 4, qNum: '⑤', sonNum: 9, momNum: 10, answer: 0.9, pass: false },
  { qId: 5, qNum: '⑥', sonNum: 7, momNum: 20, answer: 0.35, pass: false },
  { qId: 6, qNum: '⑦', sonNum: 2, momNum: 25, answer: 0.08, pass: false },
  { qId: 7, qNum: '⑧', sonNum: 13, momNum: 40, answer: 0.325, pass: false },
  { qId: 8, qNum: '⑨', sonNum: 11, momNum: 50, answer: 0.22, pass: false },
  { qId: 9, qNum: '⑩', sonNum: 71, momNum: 100, answer: 0.71, pass: false },
  { qId: 10, qNum: '⑪', sonNum: 16, momNum: 125, answer: 0.128, pass: false },
  { qId: 11, qNum: '⑫', sonNum: 99, momNum: 250, answer: 0.396, pass: false },
];
