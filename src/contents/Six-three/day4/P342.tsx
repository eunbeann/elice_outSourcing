import { useState } from 'react';
import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C342 from './C342';

export default function P342() {
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
      day="day4"
      title="분수, 소수의 비"
      question={'문제를 읽고 빈 곳에 알맞은 수를 써넣으세요.'}
    >
      <Typography
        variant="h5"
        width="100%"
        textAlign="right"
        color="grey"
        mb="2rem"
      >
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
            <C342
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
    </Layout>
  );
}

export interface ProblemProp {
  qId: number;
  qNum: string;
  pass: boolean;
  isFraction: boolean;
  leftItem: [string, string] | string;
  rightItem: [string, string] | string;
  answer: [string, string];
}

const problems: ProblemProp[] = [
  {
    qId: 0,
    qNum: '①',
    pass: false,
    isFraction: true,
    leftItem: ['3', '4'],
    rightItem: ['9', '4'],
    answer: ['1/3', '3'],
  },
  {
    qId: 1,
    qNum: '②',
    pass: false,
    isFraction: true,
    leftItem: ['15', '3'],
    rightItem: ['10', '3'],
    answer: ['3/2', '2/3'],
  },
  {
    qId: 2,
    qNum: '③',
    pass: false,
    isFraction: false,
    leftItem: '0.4',
    rightItem: '1.6',
    answer: ['1/4', '4'],
  },
  {
    qId: 3,
    qNum: '④',
    pass: false,
    isFraction: false,
    leftItem: '0.7',
    rightItem: '6.3',
    answer: ['1/9', '9'],
  },
  {
    qId: 4,
    qNum: '⑤',
    pass: false,
    isFraction: true,
    leftItem: ['3', '8'],
    rightItem: ['9', '4'],
    answer: ['1/6', '6'],
  },
  {
    qId: 5,
    qNum: '⑥',
    pass: false,
    isFraction: true,
    leftItem: ['7', '6'],
    rightItem: ['14', '3'],
    answer: ['1/4', '4'],
  },
  {
    qId: 6,
    qNum: '⑦',
    pass: false,
    isFraction: false,
    leftItem: '0.36',
    rightItem: '1.44',
    answer: ['1/4', '4'],
  },
  {
    qId: 7,
    qNum: '⑧',
    pass: false,
    isFraction: false,
    leftItem: '0.5',
    rightItem: '5.5',
    answer: ['1/11', '11'],
  },
  {
    qId: 8,
    qNum: '⑨',
    pass: false,
    isFraction: false,
    leftItem: '4.5',
    rightItem: '13.5',
    answer: ['1/3', '3'],
  },
  {
    qId: 9,
    qNum: '⑩',
    pass: false,
    isFraction: false,
    leftItem: '1.1',
    rightItem: '0.11',
    answer: ['10', '1/10'],
  },
];
