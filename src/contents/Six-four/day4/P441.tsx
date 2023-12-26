import { useState } from 'react';
import { Avatar, Box } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C441 from './C441';

import ImgExample from '../../assets/image/P441/ImgExample.png';

export default function P441() {
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
      question={'□에 알맞은 수를 써넣으세요.'}
    >
      <Box width="100%" display="flex" justifyContent="center">
        <Avatar
          src={ImgExample}
          variant="square"
          style={{
            width: '50rem',
            height: 'max-content',
            marginBottom: '2rem',
          }}
        />
      </Box>
      <Box display="grid" gridTemplateColumns="1fr">
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
            <C441
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
  numList1: number[];
  numList2: number[];
  answer: number;
}

const problems: ProblemProp[] = [
  {
    qId: 0,
    qNum: '①',
    pass: false,
    numList1: [32, 28],
    numList2: [8, 4],
    answer: 7,
  },
  {
    qId: 1,
    qNum: '②',
    pass: false,
    numList1: [7, 3, 7, 9],
    numList2: [21, 9],
    answer: 7,
  },
  {
    qId: 2,
    qNum: '③',
    pass: false,
    numList1: [16, 24],
    numList2: [4, 4],
    answer: 6,
  },
  {
    qId: 3,
    qNum: '④',
    pass: false,
    numList1: [7, 3],
    numList2: [49, 7],
    answer: 21,
  },
  {
    qId: 4,
    qNum: '⑤',
    pass: false,
    numList1: [25, 30],
    numList2: [5, 5],
    answer: 6,
  },
  {
    qId: 5,
    qNum: '⑥',
    pass: false,
    numList1: [5, 6, 10, 9],
    numList2: [15, 18],
    answer: 20,
  },
];
