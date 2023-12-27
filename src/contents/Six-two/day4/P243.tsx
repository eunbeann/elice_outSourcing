import { useState } from 'react';
import { Box, Typography } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C242 from './C242';

export default function P243() {
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
      title="소수를 분수로 고치기"
      question={'소수를 분수로 바꾸세요.'}
      day="day4"
    >
      <Typography> * 정답이 대분수일 경우 가분수로 고쳐 적습니다.</Typography>
      <Typography> * 약분 가능한 수는 약분하여 적습니다.</Typography>
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
              <C242
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
  { qId: 0, qNum: '①', sonNum: 4, momNum: 5, answer: 0.8, pass: false },
  { qId: 1, qNum: '②', sonNum: 89, momNum: 50, answer: 1.78, pass: false },
  { qId: 2, qNum: '③', sonNum: 51, momNum: 20, answer: 2.55, pass: false },
  { qId: 3, qNum: '④', sonNum: 27, momNum: 8, answer: 3.375, pass: false },
  { qId: 4, qNum: '⑤', sonNum: 212, momNum: 25, answer: 8.48, pass: false },
  { qId: 5, qNum: '⑥', sonNum: 1621, momNum: 250, answer: 6.484, pass: false },
  { qId: 6, qNum: '⑦', sonNum: 1063, momNum: 200, answer: 5.315, pass: false },
  { qId: 7, qNum: '⑧', sonNum: 381, momNum: 500, answer: 0.762, pass: false },
  { qId: 8, qNum: '⑨', sonNum: 1137, momNum: 125, answer: 9.096, pass: false },
  { qId: 9, qNum: '⑩', sonNum: 127, momNum: 50, answer: 2.54, pass: false },
  { qId: 10, qNum: '⑪', sonNum: 3673, momNum: 500, answer: 7.346, pass: false },
  { qId: 11, qNum: '⑫', sonNum: 1367, momNum: 619, answer: 4.952, pass: false },
];
