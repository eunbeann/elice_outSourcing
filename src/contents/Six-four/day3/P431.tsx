import { useState } from 'react';
import { Avatar, Box } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C431 from './C431';

export default function P431() {
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
        '어떤 비의 전항과 후항을 표에 적었습니다. 비를 가장 간단한 자연수의 비로 나타내세요.'
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
            }}
          >
            <C431
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
  numList: number[];
  answer: number[];
}

const problems: ProblemProp[] = [
  {
    qId: 0,
    qNum: '①',
    pass: false,
    numList: [7, 2, 21, 2],
    answer: [1, 3],
  },
  {
    qId: 1,
    qNum: '②',
    pass: false,
    numList: [3, 4, 1, 6],
    answer: [9, 2],
  },
  {
    qId: 2,
    qNum: '③',
    pass: false,
    numList: [0.5, 0.7],
    answer: [5, 7],
  },
  {
    qId: 3,
    qNum: '④',
    pass: false,
    numList: [3.6, 4.5],
    answer: [4, 5],
  },
  {
    qId: 4,
    qNum: '⑤',
    pass: false,
    numList: [3, 1, 3, 4, 1, 4],
    answer: [40, 51],
  },
  {
    qId: 5,
    qNum: '⑥',
    pass: false,
    numList: [3, 8, 2, 5],
    answer: [15, 16],
  },
  {
    qId: 6,
    qNum: '⑦',
    pass: false,
    numList: [0.09, 0.15],
    answer: [3, 5],
  },
  {
    qId: 6,
    qNum: '⑧',
    pass: false,
    numList: [1.2, 0.9],
    answer: [4, 3],
  },
];
