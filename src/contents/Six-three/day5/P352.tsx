import { useState } from 'react';
import { Avatar, Box } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C352 from './C352';

import Img11 from '../../assets/image/P352/Img1-1.png';
import Img12 from '../../assets/image/P352/Img1-2.png';
import Img21 from '../../assets/image/P352/Img2-1.png';
import Img22 from '../../assets/image/P352/Img2-2.png';
import Img31 from '../../assets/image/P352/Img3-1.png';
import Img32 from '../../assets/image/P352/Img3-2.png';
import Img41 from '../../assets/image/P352/Img4-1.png';
import Img42 from '../../assets/image/P352/Img4-2.png';
import Img51 from '../../assets/image/P352/Img5-1.png';
import Img52 from '../../assets/image/P352/Img5-2.png';
import ImgExample from '../../assets/image/P352/ImgExample.png';

export default function P352() {
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
        '아래 모양은 위 모양의 조각들을 몇 조각씩 똑같이 나눈 것입니다. 전체에 대한 색칠된 부분의 비를 구하세요.'
      }
    >
      <Box display="grid" gridTemplateColumns="1fr 1fr" justifyItems="center">
        <Avatar
          src={ImgExample}
          variant="square"
          style={{
            width: '18rem',
            height: 'max-content',
          }}
        />

        {problems.map(problem => (
          <Box
            key={problem.qNum}
            sx={{
              overflowY: 'auto',
              display: 'flex',
              justifyContent: 'center',
              padding: '2rem 6rem',
            }}
          >
            <C352
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
  imgSrc1: string;
  imgSrc2: string;
  answer: AnswerProp;
}

interface AnswerProp {
  first: string;
  second: string;
}

const problems: ProblemProp[] = [
  {
    qId: 0,
    qNum: '①',
    pass: false,
    imgSrc1: Img11,
    imgSrc2: Img12,
    answer: {
      first: '2:4',
      second: '4:8',
    },
  },
  {
    qId: 1,
    qNum: '②',
    pass: false,
    imgSrc1: Img21,
    imgSrc2: Img22,
    answer: {
      first: '2:6',
      second: '8:24',
    },
  },
  {
    qId: 2,
    qNum: '③',
    pass: false,
    imgSrc1: Img31,
    imgSrc2: Img32,
    answer: {
      first: '5:6',
      second: '10:12',
    },
  },
  {
    qId: 3,
    qNum: '④',
    pass: false,
    imgSrc1: Img41,
    imgSrc2: Img42,
    answer: {
      first: '3:4',
      second: '9:12',
    },
  },
  {
    qId: 4,
    qNum: '⑤',
    pass: false,
    imgSrc1: Img51,
    imgSrc2: Img52,
    answer: {
      first: '5:12',
      second: '20:48',
    },
  },
];
