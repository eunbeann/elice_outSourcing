import { useState } from 'react';
import { Box, Typography } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C242 from './C242';

export default function P242() {
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
  { qId: 0, qNum: '①', sonNum: 2, momNum: 5, answer: 0.4, pass: false },
  { qId: 1, qNum: '②', sonNum: 9, momNum: 10, answer: 0.9, pass: false },
  { qId: 2, qNum: '③', sonNum: 17, momNum: 50, answer: 0.34, pass: false },
  { qId: 3, qNum: '④', sonNum: 121, momNum: 25, answer: 4.84, pass: false },
  { qId: 4, qNum: '⑤', sonNum: 7, momNum: 4, answer: 1.75, pass: false },
  { qId: 5, qNum: '⑥', sonNum: 7, momNum: 2, answer: 3.5, pass: false },
  { qId: 6, qNum: '⑦', sonNum: 1233, momNum: 200, answer: 6.165, pass: false },
  { qId: 7, qNum: '⑧', sonNum: 5, momNum: 8, answer: 0.625, pass: false },
  { qId: 8, qNum: '⑨', sonNum: 159, momNum: 50, answer: 3.18, pass: false },
  { qId: 9, qNum: '⑩', sonNum: 2819, momNum: 40, answer: 7.475, pass: false },
  { qId: 10, qNum: '⑪', sonNum: 67, momNum: 500, answer: 8.285, pass: false },
  { qId: 11, qNum: '⑫', sonNum: 1367, momNum: 250, answer: 5.468, pass: false },
];
