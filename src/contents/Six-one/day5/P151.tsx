import { useState } from 'react';
import { Box } from '@mui/material';

import Layout from 'src/contents/common/layout';
import SubmitButton from 'src/contents/common/submit-button';
import VisualFraction from 'src/contents/common/visual-fraction';
import C151 from './C151';

export default function P151() {
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
      <QuestionTab />
      <Box display="flex" flexDirection="column">
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
                justifyContent: 'center',
                display: 'flex',
                margin: '0.5rem',
              }}
            >
              <C151
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

function QuestionTab() {
  return (
    <>
      <Box fontSize="1.5rem" display="flex" alignItems="center">
        어떤 분수를 6으로 나누어야 할 것을 잘못하여 곱했더니
        <span style={{ margin: '0ch 0.3ch' }}>
          <VisualFraction natureNum="3" momNum="5" sonNum="1" />
        </span>
        이 되었습니다.
      </Box>
      <Box fontSize="1.5rem" marginBottom="2rem">
        바르게 계산한 몫을 기약분수로 구하려고 합니다. (①~②)
      </Box>
    </>
  );
}

const divisionProblems = [
  {
    qId: 0,
    qNum: '①',
    qString: '어떤 분수를 구하세요.',
    equationNature: 3,
    equationMom: 5,
    equationSon: 1,
    equationDiv: 6,
    answerMom: 15,
    answerSon: 8,
    pass: false,
  },
  {
    qId: 1,
    qNum: '②',
    qString: '바르게 계산한 몫을 구하세요.',
    equationNature: '',
    equationMom: 15,
    equationSon: 8,
    equationDiv: 6,
    answerMom: 45,
    answerSon: 4,
    pass: false,
  },
  {
    qId: 2,
    qNum: '③',
    qString:
      '어떤 분수를 9로 나누어야 할 것을 잘못하여 곱했더니 5와 4분의 1이 되었습니다. 바르게 계산한 몫을 기약분수로 구하세요.',
    equationNature: 5,
    equationMom: 4,
    equationSon: 1,
    equationDiv: 9,
    answerMom: 108,
    answerSon: 7,
    pass: false,
  },
  {
    qId: 3,
    qNum: '④',
    qString:
      '어떤 분수를 8로 나누어야 할 것을 잘못하여 곱했더니 6과 3분의 2가 되었습니다. 바르게 계산한 몫을 기약분수로 구하세요.',
    equationNature: 6,
    equationMom: 3,
    equationSon: 2,
    equationDiv: 8,
    answerMom: 48,
    answerSon: 5,
    pass: false,
  },
];
