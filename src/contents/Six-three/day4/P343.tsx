import { useState } from 'react';
import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C343 from './C343';

export default function P343() {
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
      day="day3"
      title="자연수의 비"
      question={'빈 곳에 알맞은 수를 써넣으세요.'}
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
              padding: '2rem 4rem',
            }}
          >
            <C343
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
  answer: string;
}

const problems: ProblemProp[] = [
  {
    qId: 0,
    qNum: '①',
    pass: false,
    isFraction: true,
    leftItem: ['9', '7'],
    rightItem: ['3', '14'],
    answer: '6',
  },
  {
    qId: 1,
    qNum: '②',
    pass: false,
    isFraction: false,
    leftItem: '3.6',
    rightItem: '0.9',
    answer: '4',
  },
  {
    qId: 2,
    qNum: '③',
    pass: false,
    isFraction: false,
    leftItem: '0.48',
    rightItem: '0.06',
    answer: '8',
  },
  {
    qId: 3,
    qNum: '④',
    pass: false,
    isFraction: true,
    leftItem: ['20', '3'],
    rightItem: ['20', '27'],
    answer: '9',
  },
  {
    qId: 4,
    qNum: '⑤',
    pass: false,
    isFraction: false,
    leftItem: '5.4',
    rightItem: '0.18',
    answer: '30',
  },
  {
    qId: 5,
    qNum: '⑥',
    pass: false,
    isFraction: true,
    leftItem: ['15', '8'],
    rightItem: ['3', '4'],
    answer: '5/2',
  },
  {
    qId: 6,
    qNum: '⑦',
    pass: false,
    isFraction: true,
    leftItem: ['15', '4'],
    rightItem: ['26', '6'],
    answer: '9/10',
  },
  {
    qId: 7,
    qNum: '⑧',
    pass: false,
    isFraction: true,
    leftItem: ['14', '7'],
    rightItem: ['26', '91'],
    answer: '13/2',
  },
  {
    qId: 8,
    qNum: '⑨',
    pass: false,
    isFraction: false,
    leftItem: '5.6',
    rightItem: '0.7',
    answer: '8',
  },
];
