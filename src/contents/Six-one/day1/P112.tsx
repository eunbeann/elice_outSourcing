import { useState } from 'react';
import { Box } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C113 from './C112';

export default function P112() {
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
      title="자연수 나눗셈의 몫과 분수"
      question={`귤을 똑같이 나누어 먹을 때 한 사람이 먹는 \n 귤의 양을 구하는 나눗셈식을 쓰고, 몫을 분수로 나타내세요.`}
      day="day1"
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
                display: 'flex',
                width: 'calc(40% - 0.5rem)',
                justifyContent: 'center',
                margin: '0.5rem',
              }}
            >
              <C113
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
  { qId: 0, qNum: '①', pass: false, orangeNum: 3, peopleNum: 4 },
  { qId: 1, qNum: '②', pass: false, orangeNum: 6, peopleNum: 7 },
  { qId: 2, qNum: '③', pass: false, orangeNum: 1, peopleNum: 3 },
  { qId: 3, qNum: '④', pass: false, orangeNum: 2, peopleNum: 5 },
  { qId: 4, qNum: '⑤', pass: false, orangeNum: 3, peopleNum: 5 },
  { qId: 5, qNum: '⑥', pass: false, orangeNum: 1, peopleNum: 6 },
  { qId: 6, qNum: '⑦', pass: false, orangeNum: 2, peopleNum: 3 },
  { qId: 7, qNum: '⑧', pass: false, orangeNum: 8, peopleNum: 5 },
  { qId: 8, qNum: '⑨', pass: false, orangeNum: 7, peopleNum: 2 },
  { qId: 9, qNum: '⑩', pass: false, orangeNum: 5, peopleNum: 4 },
];
