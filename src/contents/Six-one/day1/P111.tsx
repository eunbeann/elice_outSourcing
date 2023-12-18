import { useState } from 'react';
import { Box } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import ComponentExample from './c-ex';
import C111 from './C111';

export default function P111() {
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
      question={
        '사과를 똑같이 나누어 먹을 때 \n 한 사람이 먹는 사과의 양을 분수로 나타내세요.'
      }
      day="day1"
    >
      <ComponentExample />
      <Box display="flex" justifyContent="space-around">
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
            <C111
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
  { qId: 0, qNum: '①', apples: 5, people: 2, pass: false },
  { qId: 1, qNum: '②', apples: 7, people: 3, pass: false },
];
