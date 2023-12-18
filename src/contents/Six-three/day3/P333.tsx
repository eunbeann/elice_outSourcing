import { useState } from 'react';
import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C333 from './C333';

import Img1 from '../../assets/image/P333/3-3-3_1.png';
import Img2 from '../../assets/image/P333/3-3-3_2.png';
import Img3 from '../../assets/image/P333/3-3-3_3.png';
import Img4 from '../../assets/image/P333/3-3-3_4.png';
import Img5 from '../../assets/image/P333/3-3-3_5.png';
import Img6 from '../../assets/image/P333/3-3-3_6.png';
import Img7 from '../../assets/image/P333/3-3-3_7.png';
import Img8 from '../../assets/image/P333/3-3-3_8.png';
import Img9 from '../../assets/image/P333/3-3-3_9.png';

export default function P333() {
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
      title="자연수의 비"
      question={'빈 곳에 알맞은 수를 써넣으세요.'}
    >
      <Typography
        variant="h5"
        width="100%"
        textAlign="right"
        color="grey"
        mb="2rem"
      >
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
              padding: '2rem 4rem',
            }}
          >
            <C333
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
  leftItem: string;
  rightItem: string;
  answer: string;
  imgSrc: string;
}

const problems: ProblemProp[] = [
  {
    qId: 0,
    qNum: '①',
    pass: false,
    leftItem: '초록색',
    rightItem: '파란색',
    answer: '9/11',
    imgSrc: Img1,
  },
  {
    qId: 1,
    qNum: '②',
    pass: false,
    leftItem: '파란색',
    rightItem: '초록색',
    answer: '5/6',
    imgSrc: Img2,
  },
  {
    qId: 2,
    qNum: '③',
    pass: false,
    leftItem: '초록색',
    rightItem: '파란색',
    answer: '4/3',
    imgSrc: Img3,
  },
  {
    qId: 3,
    qNum: '④',
    pass: false,
    leftItem: '초록색',
    rightItem: '파란색',
    answer: '2/5',
    imgSrc: Img4,
  },
  {
    qId: 4,
    qNum: '⑤',
    pass: false,
    leftItem: '파란색',
    rightItem: '초록색',
    answer: '5/9',
    imgSrc: Img5,
  },
  {
    qId: 5,
    qNum: '⑥',
    pass: false,
    leftItem: '초록색',
    rightItem: '파란색',
    answer: '17/36',
    imgSrc: Img6,
  },
  {
    qId: 6,
    qNum: '⑦',
    pass: false,
    leftItem: '파란색',
    rightItem: '초록색',
    answer: '8/3',
    imgSrc: Img7,
  },
  {
    qId: 7,
    qNum: '⑧',
    pass: false,
    leftItem: '초록색',
    rightItem: '파란색',
    answer: '19/9',
    imgSrc: Img8,
  },
  {
    qId: 8,
    qNum: '⑨',
    pass: false,
    leftItem: '초록색',
    rightItem: '파란색',
    answer: '11/17',
    imgSrc: Img9,
  },
];
