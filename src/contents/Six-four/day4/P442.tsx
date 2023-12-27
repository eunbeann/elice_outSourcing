import { useState } from 'react';
import { Avatar, Box } from '@mui/material';
import { Typography } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C442 from './C442';

export default function P442() {
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
      title="□ 구하기"
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
      <Box display="grid" gridTemplateColumns="1fr 1fr" gap="5rem">
        {problems.map(problem => (
          <Box
            key={problem.qNum}
            sx={{
              overflowY: 'auto',
              display: 'flex',
              justifyContent: 'center',
              margin: '0.5rem',
              paddingTop: '1rem',
              paddingLeft: '2rem',
            }}
          >
            <C442
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
        $color="#8F6CFF"
        isSolved={isSolved}
      />
    </Layout>
  );
}

export interface ProblemProp {
  qId: number;
  qNum: string;
  pass: boolean;
  num1: 'blank' | number | number[];
  num2: 'blank' | number | number[];
  num3: 'blank' | number | number[];
  num4: 'blank' | number | number[];
  answer: string;
}

const problems: ProblemProp[] = [
  {
    qId: 0,
    qNum: '①',
    pass: false,
    num1: 2,
    num2: 5,
    num3: 14,
    num4: 'blank',
    answer: '35',
  },
  {
    qId: 1,
    qNum: '②',
    pass: false,
    num1: 2.4,
    num2: 4,
    num3: 12,
    num4: 'blank',
    answer: '20',
  },
  {
    qId: 2,
    qNum: '③',
    pass: false,
    num1: 2,
    num2: 8,
    num3: [2, 3],
    num4: 'blank',
    answer: '8/3',
  },
  {
    qId: 3,
    qNum: '④',
    pass: false,
    num1: 8,
    num2: 3.3,
    num3: 24,
    num4: 'blank',
    answer: '9.9',
  },
  {
    qId: 4,
    qNum: '⑤',
    pass: false,
    num1: 'blank',
    num2: 5,
    num3: 21,
    num4: 15,
    answer: '7',
  },
  {
    qId: 5,
    qNum: '⑥',
    pass: false,
    num1: 6,
    num2: 9,
    num3: 20,
    num4: 'blank',
    answer: '30',
  },
  {
    qId: 6,
    qNum: '⑦',
    pass: false,
    num1: [8, 3],
    num2: 8,
    num3: 'blank',
    num4: 30,
    answer: '10',
  },
  {
    qId: 7,
    qNum: '⑧',
    pass: false,
    num1: 3.9,
    num2: 6,
    num3: 1.3,
    num4: 'blank',
    answer: '2',
  },
  {
    qId: 8,
    qNum: '⑨',
    pass: false,
    num1: [20, 7],
    num2: 18,
    num3: 'blank',
    num4: 6,
    answer: '20/21',
  },
  {
    qId: 9,
    qNum: '⑩',
    pass: false,
    num1: 7,
    num2: 11,
    num3: 35,
    num4: 'blank',
    answer: '55',
  },
  {
    qId: 10,
    qNum: '⑪',
    pass: false,
    num1: 'blank',
    num2: 5.4,
    num3: 35,
    num4: 27,
    answer: '7',
  },
  {
    qId: 11,
    qNum: '⑫',
    pass: false,
    num1: 9,
    num2: 42,
    num3: 'blank',
    num4: 14,
    answer: '3',
  },
  {
    qId: 12,
    qNum: '⑬',
    pass: false,
    num1: [21, 5],
    num2: 28,
    num3: 'blank',
    num4: 4,
    answer: '3/5',
  },
  {
    qId: 13,
    qNum: '⑭',
    pass: false,
    num1: 2.4,
    num2: 7.2,
    num3: 39,
    num4: 'blank',
    answer: '117',
  },
];
