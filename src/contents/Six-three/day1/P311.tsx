import { useState } from 'react';
import { Box } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C311 from './C311';

export default function P311() {
  const [isSolved, setIsSolved] = useState(false);
  const [passArray, setPassArray] = useState(
    problems.map(problem => problem.pass)
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
      title="두 수의 비교"
      question={'문제를 읽고 빈 곳에 알맞은 수를 써넣으세요.'}
    >
      <Box display="flex" justifyContent="space-around">
        {problems.map(problem => (
          <Box
            key={problem.qNum}
            sx={{
              overflowY: 'auto',
              display: 'flex',
              justifyContent: 'center',
              margin: '0.5rem',
            }}
          >
            <C311
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
    </Layout>
  );
}

export interface ProblemProp {
  qId: number;
  qNum: string;
  top: number;
  bottom: number;
  firstType: 'integer' | 'fraction';
  secondType: 'integer' | 'fraction';
  thirdType: 'integer' | 'fraction';
  pass: boolean;
}

const problems: ProblemProp[] = [
  {
    qId: 0,
    qNum: '①',
    top: 12,
    bottom: 4,
    firstType: 'fraction',
    secondType: 'integer',
    thirdType: 'fraction',
    pass: false,
  },
  {
    qId: 1,
    qNum: '②',
    top: 15,
    bottom: 3,
    firstType: 'integer',
    secondType: 'integer',
    thirdType: 'fraction',
    pass: false,
  },
];
