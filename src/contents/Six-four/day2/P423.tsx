import { useState } from 'react';
import { Avatar, Box } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C423 from './C423';

import ImgExample from '../../assets/image/P423/ImgExample.png';

export default function P423() {
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
      day="day2"
      title="간단한 자연수의 비로 나타내기"
      question={'가장 간단한 자연수의 비로 나타내세요.'}
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
              padding: '2rem 2rem',
            }}
          >
            <C423
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
  numList: number[];
  answer: number[];
}

const problems: ProblemProp[] = [
  {
    qId: 0,
    qNum: '①',
    pass: false,
    numList: [7, 2, 35, 3],
    answer: [6, 7, 3, 10],
  },
  {
    qId: 1,
    qNum: '②',
    pass: false,
    numList: [9, 6, 3, 9],
    answer: [18, 3, 9, 2],
  },
  {
    qId: 2,
    qNum: '③',
    pass: false,
    numList: [3, 8, 9, 10],
    answer: [40, 3, 5, 12],
  },
  {
    qId: 3,
    qNum: '④',
    pass: false,
    numList: [3, 2, 27, 10],
    answer: [10, 3, 5, 9],
  },
];
