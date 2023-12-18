import { useState } from 'react';
import { Avatar, Box } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C421 from './C421';

import ImgExample from '../../assets/image/P421/ImgExample.png';

export default function P421() {
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
      question={
        '가장 간단한 자연수의 비로 나타내는 과정입니다. 빈 곳에 알맞은 수를 써넣으세요.'
      }
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
            }}
          >
            <C421
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
    numList: [12, 15],
    answer: [3, 4, 5],
  },
  {
    qId: 1,
    qNum: '②',
    pass: false,
    numList: [32, 24],
    answer: [8, 4, 3],
  },
  {
    qId: 2,
    qNum: '③',
    pass: false,
    numList: [80, 48],
    answer: [16, 5, 3],
  },
  {
    qId: 3,
    qNum: '④',
    pass: false,
    numList: [90, 36],
    answer: [18, 5, 2],
  },
  {
    qId: 4,
    qNum: '⑤',
    pass: false,
    numList: [33, 44],
    answer: [11, 3, 4],
  },
  {
    qId: 5,
    qNum: '⑥',
    pass: false,
    numList: [18, 81],
    answer: [9, 2, 9],
  },
];
