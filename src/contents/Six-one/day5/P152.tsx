import { useState } from 'react';
import { Box, Typography } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C152 from './C152';

export default function P152() {
  const [isSolved, setIsSolved] = useState(false);
  const [passArray, setPassArray] = useState(
    divisionProblems.map(problem => problem.pass)
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
      title="문장제"
      question={`문제를 읽고 알맞은 식과 답을 써 보세요.`}
      day="day5"
    >
      <Typography> * 정답이 대분수일 경우 가분수로 고쳐 적습니다.</Typography>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {divisionProblems.map(problem => (
            <Box
              key={problem.qNum}
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'left',
                margin: '0.5rem',
              }}
            >
              <C152
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
      </Box>
    </Layout>
  );
}

const divisionProblems = [
  {
    qId: 0,
    qNum: '①',
    qString:
      '2 L 들이의 우유를 3일 동안 똑같이 나누어 마셨습니다. 하루에 마신 우유는 몇 L일까요?',
    equationSon: 2,
    equationDiv: 3,
    answerSon: 2,
    answerMom: 3,
    unit: 'L',
    pass: false,
  },
  {
    qId: 1,
    qNum: '②',
    qString: '둘레의 길이가 7분의 6cm인 정삼각형의 한 변의 길이는 몇 cm일까요?',
    equationMom: 7,
    equationSon: 6,
    equationDiv: 3,
    answerMom: 7,
    answerSon: 2,
    unit: 'cm',
    pass: false,
  },
  {
    qId: 2,
    qNum: '③',
    qString:
      '길이가 8과 6분의 1m인 철사를 사용하여 크기가 같은 정칠각형 2개를 만들었습니다. 정칠각형의 한 변의 길이는 몇 m일까요?',
    equationNature: 8,
    equationMom: 6,
    equationSon: 1,
    equationDiv: 14,
    answerMom: 12,
    answerSon: 7,
    unit: 'm',
    pass: false,
  },
  {
    qId: 3,
    qNum: '④',
    qString:
      '페인트 4통을 사용하여 넓이가 5와 7분의 1㎡인 벽면을 칠했습니다. 페인트 한 통으로 칠한 벽면의 넓이는 몇 ㎡일까요?',
    equationNature: 5,
    equationMom: 7,
    equationSon: 1,
    equationDiv: 4,
    answerMom: 7,
    answerSon: 9,
    unit: '㎡',
    pass: false,
  },
];
