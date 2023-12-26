import { useState } from 'react';
import { Avatar, Box } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C433 from './C433';

export default function P433() {
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
        '어떤 비의 전항을 책의 왼쪽에, 후항을 책의 오른쪽에 적었습니다. 가장 간단한 자연수의 비로 나타내세요.'
      }
    >
      <Box display="grid" gridTemplateColumns="1fr 1fr">
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
            <C433
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
    leftNum: [35],
    rightNum: [175],
    answer: [1, 5],
  },
  {
    qId: 1,
    qNum: '②',
    pass: false,
    leftNum: [0.35],
    rightNum: [4.2],
    answer: [1, 12],
  },
  {
    qId: 2,
    qNum: '③',
    pass: false,
    leftNum: [25, 6],
    rightNum: [5, 3],
    answer: [5, 2],
  },
  {
    qId: 3,
    qNum: '④',
    pass: false,
    leftNum: [75],
    rightNum: [225],
    answer: [1, 3],
  },
  {
    qId: 4,
    qNum: '⑤',
    pass: false,
    leftNum: [4.9],
    rightNum: [0.77],
    answer: [70, 11],
  },
  {
    qId: 5,
    qNum: '⑥',
    pass: false,
    leftNum: [35, 12],
    rightNum: [7, 4],
    answer: [5, 3],
  },
  {
    qId: 6,
    qNum: '⑦',
    pass: false,
    leftNum: [216],
    rightNum: [81],
    answer: [8, 3],
  },
  {
    qId: 7,
    qNum: '⑧',
    pass: false,
    leftNum: [8.5],
    rightNum: [2.5],
    answer: [17, 5],
  },
  {
    qId: 8,
    qNum: '⑨',
    pass: false,
    leftNum: [4, 15],
    rightNum: [2, 5],
    answer: [2, 3],
  },
];
