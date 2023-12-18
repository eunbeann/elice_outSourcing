import { useState } from 'react';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';

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
      day="day1"
      title="두 수의 비교"
      question={'문제를 읽고 빈 곳에 알맞은 수를 써넣으세요.'}
    >
      <Typography variant="h5" width="100%" textAlign="right" color="grey">
        * 분수는 1/4와 같이 입력합니다.
      </Typography>
      <Box display="grid" gridTemplateColumns="1fr 1fr">
        {problems.map(problem => (
          <Box
            key={problem.qNum}
            sx={{
              overflowY: 'auto',
              display: 'flex',
              justifyContent: 'center',
              padding: '2rem 2rem',
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
        $color="#FF6291"
        isSolved={isSolved}
      />
    </Layout>
  );
}

export interface ProblemProp {
  qId: number;
  qNum: string;
  pass: boolean;
  leftItem: number;
  rightItem: number;
  answer: [string, string];
}

const problems: ProblemProp[] = [
  {
    qId: 0,
    qNum: '①',
    pass: false,
    leftItem: 12,
    rightItem: 4,
    answer: ['3', '1/3'],
  },
  {
    qId: 1,
    qNum: '②',
    pass: false,
    leftItem: 15,
    rightItem: 3,
    answer: ['5', '1/5'],
  },
  {
    qId: 2,
    qNum: '③',
    pass: false,
    leftItem: 15,
    rightItem: 6,
    answer: ['5/2', '2/5'],
  },
  {
    qId: 3,
    qNum: '④',
    pass: false,
    leftItem: 21,
    rightItem: 7,
    answer: ['3', '1/3'],
  },
  {
    qId: 4,
    qNum: '⑤',
    pass: false,
    leftItem: 35,
    rightItem: 10,
    answer: ['7/2', '2/7'],
  },
  {
    qId: 5,
    qNum: '⑥',
    pass: false,
    leftItem: 48,
    rightItem: 4,
    answer: ['12', '1/12'],
  },
  {
    qId: 6,
    qNum: '⑦',
    pass: false,
    leftItem: 20,
    rightItem: 5,
    answer: ['4', '1/4'],
  },
  {
    qId: 7,
    qNum: '⑧',
    pass: false,
    leftItem: 60,
    rightItem: 12,
    answer: ['5', '1/5'],
  },
  {
    qId: 8,
    qNum: '⑨',
    pass: false,
    leftItem: 70,
    rightItem: 14,
    answer: ['5', '1/5'],
  },
  {
    qId: 9,
    qNum: '⑩',
    pass: false,
    leftItem: 90,
    rightItem: 25,
    answer: ['18/5', '5/18'],
  },
];
