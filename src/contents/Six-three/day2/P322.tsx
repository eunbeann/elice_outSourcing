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
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
  7: number;
  8: number;
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
      1: 4,
      2: 5,
      3: 5,
      4: 4,
      5: 4,
      6: 5,
      7: 4,
      8: 5,
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
      1: 6,
      2: 7,
      3: 6,
      4: 7,
      5: 6,
      6: 7,
      7: 6,
      8: 7,
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
      1: 4,
      2: 3,
      3: 3,
      4: 4,
      5: 4,
      6: 3,
      7: 4,
      8: 3,
    },
  },
  {
    qId: 3,
    qNum: '④',
    pass: false,
    mom: 5,
    son: 2,
    hintIdx: 0,
    answer: {
      1: 5,
      2: 2,
      3: 5,
      4: 2,
      5: 2,
      6: 5,
      7: 5,
      8: 2,
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
      1: 6,
      2: 8,
      3: 8,
      4: 6,
      5: 6,
      6: 8,
      7: 6,
      8: 8,
    },
  },
  {
    qId: 5,
    qNum: '⑥',
    pass: false,
    mom: 3,
    son: 11,
    hintIdx: 0,
    answer: {
      1: 3,
      2: 11,
      3: 3,
      4: 11,
      5: 11,
      6: 3,
      7: 3,
      8: 11,
    },
  },
];
