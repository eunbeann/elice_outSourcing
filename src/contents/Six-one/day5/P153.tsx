import { useState } from 'react';
import { Box, Typography } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import C152 from './C152';

export default function P153() {
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
      '4 km를 일정한 속력으로 3시간 동안 걸었습니다. 1시간에 몇 km를 걸었을까요?',
    equationSon: 4,
    equationDiv: 3,
    answerSon: 4,
    answerMom: 3,
    unit: 'km',
    pass: false,
  },
  {
    qId: 1,
    qNum: '②',
    qString:
      '승주네 자동차는 15 km를 가는 데 1과 8분의 7L의 기름을 사용하였습니다. 이 자동차로 1 km를 가려면 몇 L의 기름이 필요할까요?',
    equationNature: 1,
    equationMom: 8,
    equationSon: 7,
    equationDiv: 15,
    answerMom: 8,
    answerSon: 1,
    unit: 'L',
    pass: false,
  },
  {
    qId: 2,
    qNum: '③',
    qString:
      '길이가 4와 5분의 4cm인 철사를 사용하여 한 변의 길이가 서로 같은 정사각형과 정오각형을 만들었습니다. 두 도형의 한 변의 길이는 몇 cm일까요?',
    equationNature: 4,
    equationMom: 5,
    equationSon: 4,
    equationDiv: 9,
    answerMom: 15,
    answerSon: 8,
    unit: 'cm',
    pass: false,
  },
  {
    qId: 3,
    qNum: '④',
    qString:
      '넓이가 9와 6분의 1m²인 직사각형이 있습니다. 이 직사각형의 가로의 길이가 6 cm일 때 세로의 길이는 몇 cm일까요?',
    equationNature: 9,
    equationMom: 6,
    equationSon: 1,
    equationDiv: 6,
    answerMom: 36,
    answerSon: 55,
    unit: 'cm',
    pass: false,
  },
];
