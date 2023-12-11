import { useState } from 'react';
import { Box } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C321 from './C321';

import Img1 from '../../assets/image/P323/Img1.png'
import Img2 from '../../assets/image/P323/Img2.png'
import Img3 from '../../assets/image/P323/Img3.png'
import Img4 from '../../assets/image/P323/Img4.png'
import Img5 from '../../assets/image/P323/Img5.png'
import Img6 from '../../assets/image/P323/Img6.png'
import Img7 from '../../assets/image/P323/Img7.png'
import Img8 from '../../assets/image/P323/Img8.png'
import Img9 from '../../assets/image/P323/Img9.png'
import Img10 from '../../assets/image/P323/Img10.png'
import Img11 from '../../assets/image/P323/Img11.png'
import Img12 from '../../assets/image/P323/Img12.png'
import Img13 from '../../assets/image/P323/Img13.png'
import Img14 from '../../assets/image/P323/Img14.png'

export default function P321() {
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
    <Layout title="비" question={'□에 알맞은 수를 써넣으세요.'}>
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
            <C321
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
  imgSrc: string;
  answer: string;
}

const problems: ProblemProp[] = [
  {
    qId: 0,
    qNum: '①',
    pass: false,
    imgSrc: Img1,
    answer: '3:5',
  },
  {
    qId: 1,
    qNum: '②',
    pass: false,
    imgSrc: Img2,
    answer: '2:4',
  },
  {
    qId: 0,
    qNum: '①',
    pass: false,
    imgSrc: Img1,
    answer: '3:5',
  },
  {
    qId: 0,
    qNum: '②',
    pass: false,
    imgSrc: Img2,
    answer: '2:4',
  },
  {
    qId: 0,
    qNum: '③',
    pass: false,
    imgSrc: Img3,
    answer: '5:9',
  },
  {
    qId: 0,
    qNum: '④',
    pass: false,
    imgSrc: Img4,
    answer: '2:5',
  },
  {
    qId: 0,
    qNum: '⑤',
    pass: false,
    imgSrc: Img5,
    answer: '4:6',
  },
  {
    qId: 0,
    qNum: '⑥',
    pass: false,
    imgSrc: Img6,
    answer: '2:6',
  },
  {
    qId: 0,
    qNum: '⑦',
    pass: false,
    imgSrc: Img7,
    answer: '4:10',
  },
  {
    qId: 0,
    qNum: '⑧',
    pass: false,
    imgSrc: Img8,
    answer: '5:8',
  },
  {
    qId: 0,
    qNum: '⑨',
    pass: false,
    imgSrc: Img9,
    answer: '5:6',
  },
  {
    qId: 0,
    qNum: '⑩',
    pass: false,
    imgSrc: Img10,
    answer: '1:5',
  },
  {
    qId: 0,
    qNum: '⑪',
    pass: false,
    imgSrc: Img11,
    answer: '7:8',
  },
  {
    qId: 0,
    qNum: '⑫',
    pass: false,
    imgSrc: Img12,
    answer: '1:6',
  },
  {
    qId: 0,
    qNum: '⑬',
    pass: false,
    imgSrc: Img13,
    answer: '2:10',
  },
  {
    qId: 0,
    qNum: '⑭',
    pass: false,
    imgSrc: Img14,
    answer: '3:4',
  },
];
