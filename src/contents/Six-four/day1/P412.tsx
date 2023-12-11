import { useState } from 'react';
import { Avatar, Box } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C412 from './C412';

export default function P412() {
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
      title="비와 비례식"
      question={'두 비율로 비례식을 세웠습니다. □에 알맞은 수를 써넣으세요.'}
    >
      <Box width="100%" display="flex" justifyContent="center"></Box>
      <Box display="flex" flexWrap="wrap" justifyContent="space-around">
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
            <C412
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
  numList: (number | undefined)[];
  answer: number[];
}

const problems: ProblemProp[] = [
  {
    qId: 0,
    qNum: '①',
    pass: false,
    numList: [3, 2, 3, 3, 2, undefined, 9, undefined],
    answer: [3, 6],
  },
  {
    qId: 1,
    qNum: '②',
    pass: false,
    numList: [8, 6, 8, 2, 6, undefined, 4, undefined],
    answer: [2, 3],
  },
  {
    qId: 2,
    qNum: '③',
    pass: false,
    numList: [8, 7, 8, undefined, 7, 3, undefined, 21],
    answer: [3, 24],
  },
  {
    qId: 3,
    qNum: '④',
    pass: false,
    numList: [15, 10, 15, 5, 10, undefined, 3, undefined],
    answer: [5, 2],
  },
  {
    qId: 4,
    qNum: '⑤',
    pass: false,
    numList: [5, 4, 5, 4, 4, undefined, 20, undefined],
    answer: [4, 16],
  },
  {
    qId: 5,
    qNum: '⑥',
    pass: false,
    numList: [12, 4, 12, 2, 4, undefined, 6, undefined],
    answer: [2, 2],
  },
  {
    qId: 6,
    qNum: '⑦',
    pass: false,
    numList: [9, 7, 9, undefined, 7, 4, undefined, 28],
    answer: [4, 36],
  },
  {
    qId: 7,
    qNum: '⑧',
    pass: false,
    numList: [20, 25, 20, 5, 25, undefined, 4, undefined],
    answer: [5, 5],
  },
];
