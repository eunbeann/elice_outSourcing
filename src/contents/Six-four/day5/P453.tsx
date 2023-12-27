import { useState } from 'react';
import { Box } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C453 from './C453';

export default function P453() {
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
      day="day5"
      title="□ 구하기"
      question={
        '3장의 수 카드를 한 번씩만 사용하여 비례식을 완성하세요. 각각 두 가지 방법이 있어요.'
      }
    >
      <Box display="grid" gridTemplateColumns="1fr 1fr" gap="5rem">
        {problems.map(problem => (
          <Box
            key={problem.qNum}
            sx={{
              overflowY: 'auto',
              display: 'flex',
              justifyContent: 'center',
              paddingLeft: '2rem',
              height: '12rem',
            }}
          >
            <C453
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
        $color="#00B76A"
        isSolved={isSolved}
      />
    </Layout>
  );
}

export interface ProblemProp {
  qId: number;
  qNum: string;
  pass: boolean;
  cardNumList: number[];
  index: number;
  num: number;
  answer: number[];
}

const problems: ProblemProp[] = [
  {
    qId: 0,
    qNum: '①',
    pass: false,
    cardNumList: [5, 9, 15],
    index: 0,
    num: 3,
    answer: [5, 9, 15, 9, 5, 15],
  },
  {
    qId: 1,
    qNum: '②',
    pass: false,
    cardNumList: [4, 7, 21],
    index: 1,
    num: 12,
    answer: [4, 7, 21, 21, 7, 4],
  },
  {
    qId: 2,
    qNum: '③',
    pass: false,
    cardNumList: [3, 5, 21],
    index: 3,
    num: 35,
    answer: [3, 21, 5, 3, 5, 21],
  },
  {
    qId: 3,
    qNum: '④',
    pass: false,
    cardNumList: [7, 9, 28],
    index: 2,
    num: 36,
    answer: [9, 7, 28, 28, 7, 9],
  },
  {
    qId: 4,
    qNum: '⑤',
    pass: false,
    cardNumList: [12, 18, 33],
    index: 0,
    num: 22,
    answer: [33, 12, 18, 12, 33, 18],
  },
  {
    qId: 5,
    qNum: '⑥',
    pass: false,
    cardNumList: [8, 16, 34],
    index: 1,
    num: 17,
    answer: [34, 16, 8, 8, 16, 34],
  },
];
