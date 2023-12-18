import { useState } from 'react';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C312 from './C312';

import FirstImg from '../../assets/image/P312/3-1-2_1.png';
import SecondImg from '../../assets/image/P312/3-1-2_2.png';

export default function P312() {
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
      day="day1"
      title="두 수의 비교"
      question={'문제를 읽고 빈 곳에 알맞은 수를 써넣으세요.'}
    >
      <Typography variant="h5" width="100%" textAlign="right" color="grey">
        * 분수는 1/4와 같이 입력합니다.
      </Typography>
      <Box display="grid" gridTemplateColumns="1fr">
        {problems.map(problem => (
          <Box
            key={problem.qNum}
            sx={{
              overflowY: 'auto',
              display: 'flex',
              justifyContent: 'center',
              padding: '2rem 2rem',
            }}
          >
            <C312
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
        $color="#FF6291"
        isSolved={isSolved}
      />
    </Layout>
  );
}

export interface ProblemProp {
  qId: number;
  qNum: string;
  pass: boolean;
  answer: [string, string, string, string, string, string, string];
  imgSrc: string;
}

const problems: ProblemProp[] = [
  {
    qId: 0,
    qNum: '①',
    pass: false,
    answer: ['12', '15', '18', '10', '12', '3/2', '2/3'],
    imgSrc: FirstImg,
  },
  {
    qId: 1,
    qNum: '②',
    pass: false,
    answer: ['16', '20', '24', '10', '12', '2', '1/2'],
    imgSrc: SecondImg,
  },
];
