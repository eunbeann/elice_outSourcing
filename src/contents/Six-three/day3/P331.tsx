import { useState } from 'react';
import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C331 from './C331';

import ImgExample from '../../assets/image/P331/ImgExample.png';

export default function P331() {
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
            <C331
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
  pass: boolean;
  leftItem: number;
  rightItem: number;
  answer: string;
}

const problems: ProblemProp[] = [
  {
    qId: 0,
    qNum: '①',
    pass: false,
    leftItem: 4,
    rightItem: 5,
    answer: '4/5',
  },
  {
    qId: 1,
    qNum: '②',
    pass: false,
    leftItem: 7,
    rightItem: 4,
    answer: '4/7',
  },
  {
    qId: 2,
    qNum: '③',
    pass: false,
    leftItem: 2,
    rightItem: 3,
    answer: '2/3',
  },
  {
    qId: 3,
    qNum: '④',
    pass: false,
    leftItem: 4,
    rightItem: 8,
    answer: '2',
  },
  {
    qId: 4,
    qNum: '⑤',
    pass: false,
    leftItem: 3,
    rightItem: 7,
    answer: '3/7',
  },
  {
    qId: 5,
    qNum: '⑥',
    pass: false,
    leftItem: 4,
    rightItem: 9,
    answer: '9/4',
  },
  {
    qId: 6,
    qNum: '⑦',
    pass: false,
    leftItem: 6,
    rightItem: 11,
    answer: '6/11',
  },
  {
    qId: 7,
    qNum: '⑧',
    pass: false,
    leftItem: 13,
    rightItem: 8,
    answer: '8/13',
  },
];
