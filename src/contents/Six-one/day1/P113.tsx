import { useState } from 'react';
import { Box } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C113 from './C113';

export default function P113() {
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
      question="나눗셈의 몫을 분수로 나타내세요."
      day="day1"
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        {divisionProblems.map(problem => (
          <Box
            key={problem.qNum}
            sx={{
              display: 'flex',
              width: 'calc(40% - 0.5rem)',
              margin: '2rem 0.5rem',
              paddingLeft: '10%',
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
    </Layout>
  );
}

const divisionProblems = [
  { qId: 0, qNum: '①', lNum: 1, rNum: 4, pass: false },
  { qId: 1, qNum: '②', lNum: 7, rNum: 8, pass: false },
  { qId: 2, qNum: '③', lNum: 5, rNum: 2, pass: false },
  { qId: 3, qNum: '④', lNum: 9, rNum: 4, pass: false },
  { qId: 4, qNum: '⑤', lNum: 11, rNum: 4, pass: false },
  { qId: 5, qNum: '⑥', lNum: 3, rNum: 10, pass: false },
  { qId: 6, qNum: '⑦', lNum: 8, rNum: 3, pass: false },
  { qId: 7, qNum: '⑧', lNum: 9, rNum: 2, pass: false },
  { qId: 8, qNum: '⑨', lNum: 6, rNum: 5, pass: false },
  { qId: 9, qNum: '⑩', lNum: 10, rNum: 11, pass: false },
  { qId: 10, qNum: '⑪', lNum: 12, rNum: 5, pass: false },
  { qId: 11, qNum: '⑫', lNum: 15, rNum: 22, pass: false },
];
