import { useState } from 'react';
import { Box, Typography } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C223 from './C223';

export default function P223() {
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
      question={'분수를 소수로 바꾸세요.'}
      day="day2"
    >
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
              <C223
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
  { qId: 0, qNum: '①', sonNum: 1, momNum: 4, answer: 0.25, pass: false },
  { qId: 1, qNum: '②', sonNum: 3, momNum: 5, answer: 0.6, pass: false },
  { qId: 2, qNum: '③', sonNum: 7, momNum: 10, answer: 0.7, pass: false },
  { qId: 3, qNum: '④', sonNum: 7, momNum: 8, answer: 0.875, pass: false },
  { qId: 4, qNum: '⑤', sonNum: 11, momNum: 20, answer: 0.55, pass: false },
  { qId: 5, qNum: '⑥', sonNum: 9, momNum: 25, answer: 0.36, pass: false },
  { qId: 6, qNum: '⑦', sonNum: 31, momNum: 50, answer: 0.62, pass: false },
  { qId: 7, qNum: '⑧', sonNum: 83, momNum: 100, answer: 0.83, pass: false },
  { qId: 8, qNum: '⑨', sonNum: 21, momNum: 125, answer: 0.168, pass: false },
  { qId: 9, qNum: '⑩', sonNum: 103, momNum: 200, answer: 0.515, pass: false },
  { qId: 10, qNum: '⑪', sonNum: 109, momNum: 250, answer: 0.436, pass: false },
  { qId: 11, qNum: '⑫', sonNum: 67, momNum: 500, answer: 0.134, pass: false },
];
