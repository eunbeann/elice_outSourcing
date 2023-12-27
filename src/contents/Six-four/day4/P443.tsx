import { useState } from 'react';
import { Box } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C443 from './C443';

export default function P443() {
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
      day="day4"
      title="□ 구하기"
      question={'빈 곳에 알맞은 수를 써넣으세요.'}
    >
      <Box display="grid" gridTemplateColumns="1fr 1fr">
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
            <C443
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
        $color="#8F6CFF"
        isSolved={isSolved}
      />
    </Layout>
  );
}

export interface ProblemProp {
  qId: number;
  qNum: string;
  pass: boolean;
  numList: (number | string)[];
  answer: number;
}

const problems: ProblemProp[] = [
  {
    qId: 0,
    qNum: '①',
    pass: false,
    numList: [5, 12, 'blank', 36],
    answer: 15,
  },
  {
    qId: 1,
    qNum: '②',
    pass: false,
    numList: [12, 42, 6, 'blank'],
    answer: 21,
  },
  {
    qId: 2,
    qNum: '③',
    pass: false,
    numList: [42, 60, 'blank', 10],
    answer: 7,
  },
  {
    qId: 3,
    qNum: '④',
    pass: false,
    numList: ['blank', 9, 48, 72],
    answer: 6,
  },
  {
    qId: 4,
    qNum: '⑤',
    pass: false,
    numList: [0.4, 'blank', 56, 42],
    answer: 0.3,
  },
  {
    qId: 5,
    qNum: '⑥',
    pass: false,
    numList: [28, 70, 4, 'blank'],
    answer: 10,
  },
  {
    qId: 6,
    qNum: '⑦',
    pass: false,
    numList: [78, 39, 26, 'blank'],
    answer: 13,
  },
  {
    qId: 7,
    qNum: '⑧',
    pass: false,
    numList: [6, 'blank', 44, 22],
    answer: 3,
  },
  {
    qId: 8,
    qNum: '⑨',
    pass: false,
    numList: [48, 24, 6, 'blank'],
    answer: 3,
  },
  {
    qId: 9,
    qNum: '⑩',
    pass: false,
    numList: [36, 60, 24, 'blank'],
    answer: 40,
  },
  {
    qId: 10,
    qNum: '⑪',
    pass: false,
    numList: [77, 7, 99, 'blank'],
    answer: 9,
  },
  {
    qId: 11,
    qNum: '⑫',
    pass: false,
    numList: [2.5, 15, 8, 'blank'],
    answer: 48,
  },
];
