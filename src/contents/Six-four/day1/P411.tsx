import { useState } from 'react';
import { Avatar, Box } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C411 from './C411';

import ImgExample from '../../assets/image/P411/ImgExample.png';

export default function P411() {
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
      <Box width="100%" display="flex" justifyContent="center">
        <Avatar
          src={ImgExample}
          variant="square"
          style={{
            width: '40rem',
            height: 'max-content',
            marginBottom: '2rem',
          }}
        />
      </Box>
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
            <C411
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
  answer: number;
}

const problems: ProblemProp[] = [
  {
    qId: 0,
    qNum: '①',
    pass: false,
    numList: [5, 3, undefined, 9],
    answer: 15,
  },
  {
    qId: 1,
    qNum: '②',
    pass: false,
    numList: [15, 40, 3, undefined],
    answer: 8,
  },
  {
    qId: 2,
    qNum: '③',
    pass: false,
    numList: [7, 9, undefined, 36],
    answer: 28,
  },
  {
    qId: 3,
    qNum: '④',
    pass: false,
    numList: [8, 11, 24, undefined],
    answer: 33,
  },
  {
    qId: 4,
    qNum: '⑤',
    pass: false,
    numList: [undefined, 3, 24, 18],
    answer: 4,
  },
  {
    qId: 5,
    qNum: '⑥',
    pass: false,
    numList: [49, undefined, 7, 6],
    answer: 42,
  },
];
