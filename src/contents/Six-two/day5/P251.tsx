import { useState } from 'react';
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

import ExampleBox from 'src/contents/common/example-box';
import Layout from 'src/contents/common/layout';
import { CustomTypo } from 'src/contents/common/styled-component';
import SubmitButton from 'src/contents/common/submit-button';
import C251 from './C251';

export default function P251() {
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
      title="연산퍼즐"
      question={'몫이 같은 알파벳을 입력하십시오.'}
      day="day5"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <ExampleBox>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {examples.map(problem => (
              <Box
                key={problem.qNum}
                sx={{
                  display: 'flex',
                  width: '30%',
                  flexDirection: 'row',
                  margin: '0.5rem',
                }}
              >
                <EXC251 examples={problem} />
              </Box>
            ))}
          </Box>
        </ExampleBox>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {divisionProblems.map(problem => (
            <Box
              key={problem.qNum}
              sx={{
                display: 'flex',
                width: '40%',
                justifyContent: 'center',
                margin: '0.5rem',
              }}
            >
              <C251
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
  { qId: 0, qNum: '①', sonNum: 34, momNum: 100, answer: 3, pass: false },
  { qId: 1, qNum: '②', sonNum: 55, momNum: 100, answer: 2, pass: false },
  { qId: 2, qNum: '③', sonNum: 5, momNum: 10, answer: 1, pass: false },
  { qId: 3, qNum: '④', sonNum: 264, momNum: 1000, answer: 4, pass: false },
  { qId: 4, qNum: '⑤', sonNum: 75, momNum: 100, answer: 5, pass: false },
  { qId: 5, qNum: '⑥', sonNum: 28, momNum: 100, answer: 6, pass: false },
];

interface EXC251Props {
  examples: {
    qId: number;
    qNum: string;
    sonNum: number;
    momNum: number;
  };
}
export function EXC251(props: EXC251Props) {
  const { examples } = props;
  const { qId, qNum, sonNum, momNum } = examples;
  return (
    <Box
      display="flex"
      border="1px solid grey"
      padding="1rem"
      paddingLeft="10%"
      width="10rem"
      borderRadius="0.3rem"
    >
      <CustomTypo marginRight="1rem">{qNum}</CustomTypo>
      <ExamTypo>{sonNum}</ExamTypo> <ExamTypo> ÷ </ExamTypo>
      <ExamTypo>{momNum}</ExamTypo>
    </Box>
  );
}

const ExamTypo = styled(Typography)`
  font-size: 1.25rem;
`;

const examples = [
  { qId: 0, qNum: '①', sonNum: 1, momNum: 2 },
  { qId: 1, qNum: '②', sonNum: 11, momNum: 20 },
  { qId: 2, qNum: '③', sonNum: 17, momNum: 50 },
  { qId: 3, qNum: '④', sonNum: 33, momNum: 125 },
  { qId: 4, qNum: '⑤', sonNum: 3, momNum: 4 },
  { qId: 5, qNum: '⑥', sonNum: 7, momNum: 25 },
];
