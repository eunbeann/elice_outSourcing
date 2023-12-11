import { useState } from 'react';
import { Box } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C322 from './C322';

import N1 from '../../assets/image/P321/N1.png';
import N2 from '../../assets/image/P321/N2.png';
import N3 from '../../assets/image/P321/N3.png';
import N4 from '../../assets/image/P321/N4.png';

export default function P322() {
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
    <Layout day="day2" title="비" question={'□에 알맞은 수를 써넣으세요.'}>
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
            <C322
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
  mom: number;
  son: number;
  hintIdx: number;
  answer: AnswerProp;
}

interface AnswerProp {
  a1: number;
  a2: number;
  a3: number;
  a4: number;
  a5: number;
  a6: number;
  a7: number;
  a8: number;
}

const problems: ProblemProp[] = [
  {
    qId: 0,
    qNum: '①',
    pass: false,
    mom: 4,
    son: 5,
    hintIdx: 0,
    answer: {
      a1: 4,
      a2: 5,
      a3: 5,
      a4: 4,
      a5: 4,
      a6: 5,
      a7: 4,
      a8: 5,
    },
  },
  {
    qId: 1,
    qNum: '②',
    pass: false,
    mom: 6,
    son: 7,
    hintIdx: 2,
    answer: {
      a1: 6,
      a2: 7,
      a3: 6,
      a4: 7,
      a5: 6,
      a6: 7,
      a7: 6,
      a8: 7,
    },
  },
  {
    qId: 2,
    qNum: '③',
    pass: false,
    mom: 4,
    son: 3,
    hintIdx: 0,
    answer: {
      a1: 4,
      a2: 3,
      a3: 3,
      a4: 4,
      a5: 4,
      a6: 3,
      a7: 4,
      a8: 3,
    },
  },
  {
    qId: 3,
    qNum: '④',
    pass: false,
    mom: 5,
    son: 2,
    hintIdx: 3,
    answer: {
      a1: 5,
      a2: 2,
      a3: 5,
      a4: 2,
      a5: 2,
      a6: 5,
      a7: 5,
      a8: 2,
    },
  },
  {
    qId: 4,
    qNum: '⑤',
    pass: false,
    mom: 6,
    son: 8,
    hintIdx: 0,
    answer: {
      a1: 6,
      a2: 8,
      a3: 8,
      a4: 6,
      a5: 6,
      a6: 8,
      a7: 6,
      a8: 8,
    },
  },
  {
    qId: 5,
    qNum: '⑥',
    pass: false,
    mom: 3,
    son: 11,
    hintIdx: 4,
    answer: {
      a1: 3,
      a2: 11,
      a3: 3,
      a4: 11,
      a5: 11,
      a6: 3,
      a7: 3,
      a8: 11,
    },
  },
];
