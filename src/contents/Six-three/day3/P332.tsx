import { useState } from 'react';
import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C332 from './C332';

export default function P332() {
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
              padding: '2rem 2rem',
            }}
          >
            <C332
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
  leftItem: number;
  rightItem: number;
  answer: [string, string];
}

const problems: ProblemProp[] = [
  {
    qId: 0,
    qNum: '①',
    pass: false,
    leftItem: 9,
    rightItem: 3,
    answer: ['3', '1/3'],
  },
  {
    qId: 1,
    qNum: '②',
    pass: false,
    leftItem: 12,
    rightItem: 4,
    answer: ['3', '1/3'],
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
    leftItem: 18,
    rightItem: 3,
    answer: ['6', '1/6'],
  },
  {
    qId: 4,
    qNum: '⑤',
    pass: false,
    leftItem: 27,
    rightItem: 6,
    answer: ['9/2', '2/9'],
  },
  {
    qId: 5,
    qNum: '⑥',
    pass: false,
    leftItem: 4,
    rightItem: 30,
    answer: ['2/15', '15/2'],
  },
  {
    qId: 6,
    qNum: '⑦',
    pass: false,
    leftItem: 30,
    rightItem: 24,
    answer: ['5/4', '4/5'],
  },
  {
    qId: 7,
    qNum: '⑧',
    pass: false,
    leftItem: 5,
    rightItem: 35,
    answer: ['1/7', '7'],
  },
  {
    qId: 8,
    qNum: '⑨',
    pass: false,
    leftItem: 25,
    rightItem: 10,
    answer: ['5/2', '2/5'],
  },
  {
    qId: 9,
    qNum: '⑩',
    pass: false,
    leftItem: 9,
    rightItem: 45,
    answer: ['1/5', '5'],
  },
];
