import { useState } from 'react';
import { Box } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C353 from './C353';

import Img1 from '../../assets/image/P353/Img1.png';
import Img2 from '../../assets/image/P353/Img2.png';
import Img3 from '../../assets/image/P353/Img3.png';
import Img4 from '../../assets/image/P353/Img4.png';
import Img5 from '../../assets/image/P353/Img5.png';

export default function P353() {
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
      title="여러 가지 비로 나타내기"
      question={
        '주머니에 그 주머니의 색깔과 같은 사탕을 담았습니다. 주머니의 수의 비와 사탕의 수의 비를 각각 구하세요.'
      }
    >
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
            <C353
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
  imgSrc: string;
  candyNum: number;
  answer: AnswerProp;
}

interface AnswerProp {
  firstMom: number;
  firstSon: number;
  secondMom: number;
  secondSon: number;
}

const problems: ProblemProp[] = [
  {
    qId: 0,
    qNum: '①',
    pass: false,
    imgSrc: Img1,
    candyNum: 3,
    answer: {
      firstMom: 3,
      firstSon: 4,
      secondMom: 9,
      secondSon: 12,
    },
  },
  {
    qId: 1,
    qNum: '②',
    pass: false,
    imgSrc: Img2,
    candyNum: 4,
    answer: {
      firstMom: 4,
      firstSon: 3,
      secondMom: 16,
      secondSon: 12,
    },
  },
  {
    qId: 2,
    qNum: '③',
    pass: false,
    imgSrc: Img3,
    candyNum: 2,
    answer: {
      firstMom: 2,
      firstSon: 6,
      secondMom: 4,
      secondSon: 12,
    },
  },
  {
    qId: 3,
    qNum: '④',
    pass: false,
    imgSrc: Img4,
    candyNum: 3,
    answer: {
      firstMom: 4,
      firstSon: 5,
      secondMom: 12,
      secondSon: 15,
    },
  },
  {
    qId: 3,
    qNum: '⑤',
    pass: false,
    imgSrc: Img5,
    candyNum: 7,
    answer: {
      firstMom: 1,
      firstSon: 7,
      secondMom: 7,
      secondSon: 49,
    },
  },
];
