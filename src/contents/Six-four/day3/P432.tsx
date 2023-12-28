import { useState } from 'react';
import { Avatar, Box } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C432 from './C432';

export default function P432() {
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
      title="다른 비로 나타내기"
      question={
        '비를 가장 간단한 자연수의 비로 나타내려고 합니다. 빈 곳에 알맞은 수를 써넣으세요.'
      }
    >
      <Box display="grid" gridTemplateColumns="1fr">
        {problems.map(problem => (
          <Box
            key={problem.qNum}
            sx={{
              overflowY: 'auto',
              display: 'flex',
              justifyContent: 'center',
              margin: '0.5rem',
              paddingTop: '2rem',
              paddingLeft: '2rem',
            }}
          >
            <C432
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
  leftNum: number[];
  rightNum: number[];
  answer: number[];
}

const problems: ProblemProp[] = [
  {
    qId: 0,
    qNum: '①',
    pass: false,
    leftNum: [2.3],
    rightNum: [4.7],
    answer: [23, 47],
  },
  {
    qId: 1,
    qNum: '②',
    pass: false,
    leftNum: [4, 2, 5],
    rightNum: [3.3],
    answer: [4, 3],
  },
  {
    qId: 2,
    qNum: '③',
    pass: false,
    leftNum: [7.2],
    rightNum: [2.4],
    answer: [3, 1],
  },
  {
    qId: 3,
    qNum: '④',
    pass: false,
    leftNum: [2, 9],
    rightNum: [5, 6],
    answer: [4, 15],
  },
  {
    qId: 4,
    qNum: '⑤',
    pass: false,
    leftNum: [6],
    rightNum: [1.2],
    answer: [5, 1],
  },
  {
    qId: 5,
    qNum: '⑥',
    pass: false,
    leftNum: [4.5],
    rightNum: [7.5],
    answer: [3, 5],
  },
  {
    qId: 6,
    qNum: '⑦',
    pass: false,
    leftNum: [17, 3],
    rightNum: [2, 9],
    answer: [51, 2],
  },
  {
    qId: 7,
    qNum: '⑧',
    pass: false,
    leftNum: [8],
    rightNum: [3, 1, 3],
    answer: [12, 5],
  },
  {
    qId: 8,
    qNum: '⑨',
    pass: false,
    leftNum: [18],
    rightNum: [24],
    answer: [3, 4],
  },
  {
    qId: 9,
    qNum: '⑩',
    pass: false,
    leftNum: [5, 4],
    rightNum: [4, 5],
    answer: [25, 16],
  },
  {
    qId: 10,
    qNum: '⑪',
    pass: false,
    leftNum: [2.7],
    rightNum: [0.36],
    answer: [15, 2],
  },
  {
    qId: 11,
    qNum: '⑫',
    pass: false,
    leftNum: [3, 1, 2],
    rightNum: [7.7],
    answer: [5, 11],
  },
];
