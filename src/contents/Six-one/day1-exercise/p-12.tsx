import { useState } from 'react';
import { Box } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import Component12Page from './12p-component';

export default function Page12() {
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
                width: 'calc(40% - 0.5rem)',
                justifyContent: 'center',
                margin: '0.5rem',
              }}
            >
              <Component12Page
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
