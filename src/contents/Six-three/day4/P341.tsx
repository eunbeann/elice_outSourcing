import { useState } from 'react';
import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C341 from './C341';

import ImgExample from '../../assets/image/P341/ImgExample.png';

export default function P341() {
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
      <Avatar
        src={ImgExample}
        variant="square"
        style={{
          width: '45rem',
          height: 'max-content',
          marginBottom: '2rem',
        }}
      />
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
            <C341
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
    leftItem: ['3', '4'],
    rightItem: ['2', '3'],
    answer: '9/8',
  },
  {
    qId: 1,
    qNum: '②',
    pass: false,
    isFraction: true,
    leftItem: ['2', '5'],
    rightItem: ['3', '4'],
    answer: '15/8',
  },
  {
    qId: 2,
    qNum: '③',
    pass: false,
    isFraction: false,
    leftItem: '0.4',
    rightItem: '0.7',
    answer: '4/7',
  },
  {
    qId: 3,
    qNum: '④',
    pass: false,
    isFraction: false,
    leftItem: '1.3',
    rightItem: '1.7',
    answer: '17/13',
  },
  {
    qId: 4,
    qNum: '⑤',
    pass: false,
    isFraction: true,
    leftItem: ['7', '8'],
    rightItem: ['3', '4'],
    answer: '7/6',
  },
  {
    qId: 5,
    qNum: '⑥',
    pass: false,
    isFraction: true,
    leftItem: ['7', '6'],
    rightItem: ['14', '3'],
    answer: '4',
  },
  {
    qId: 6,
    qNum: '⑦',
    pass: false,
    isFraction: false,
    leftItem: '2.4',
    rightItem: '0.8',
    answer: '3',
  },
  {
    qId: 7,
    qNum: '⑧',
    pass: false,
    isFraction: false,
    leftItem: '3.5',
    rightItem: '1.4',
    answer: '2/5',
  },
];
