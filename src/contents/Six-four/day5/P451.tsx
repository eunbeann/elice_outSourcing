import { useState } from 'react';
import { Avatar, Box } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C451 from './C451';

import ImgExample from '../../assets/image/P451/ImgExample.png';

export default function P451() {
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
      title="연산 퍼즐"
      question={
        '★이 나타내는 수가 더 큰 칸에 체크하여 집으로 가는 길을 표시하세요.'
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
              paddingTop: '1rem',
              paddingLeft: '2rem',
            }}
          >
            <C451
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
  pass: boolean;
  answer: boolean;
}

const problems: ProblemProp[] = [
  {
    qId: 0,
    pass: false,
    answer: false,
  },
  {
    qId: 1,
    pass: false,
    answer: false,
  },
  {
    qId: 2,
    pass: false,
    answer: false,
  },
  {
    qId: 3,
    pass: false,
    answer: true,
  },
  {
    qId: 4,
    pass: false,
    answer: false,
  },
  {
    qId: 5,
    pass: false,
    answer: false,
  },
  {
    qId: 6,
    pass: false,
    answer: false,
  },
  {
    qId: 7,
    pass: false,
    answer: true,
  },
  {
    qId: 8,
    pass: false,
    answer: false,
  },
  {
    qId: 9,
    pass: false,
    answer: false,
  },
  {
    qId: 10,
    pass: false,
    answer: false,
  },
  {
    qId: 11,
    pass: false,
    answer: true,
  },
  {
    qId: 12,
    pass: false,
    answer: true,
  },
  {
    qId: 13,
    pass: false,
    answer: false,
  },
  {
    qId: 14,
    pass: false,
    answer: false,
  },
  {
    qId: 15,
    pass: false,
    answer: false,
  },
  {
    qId: 16,
    pass: false,
    answer: true,
  },
  {
    qId: 17,
    pass: false,
    answer: true,
  },
  {
    qId: 18,
    pass: false,
    answer: true,
  },
];
