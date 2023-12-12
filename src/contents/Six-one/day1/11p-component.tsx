import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Apple, Person } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import DivisionInput, { NumberInput } from 'src/contents/common/number-box';

import orange from 'src/contents/assets/icon/orange.svg';
import person from 'src/contents/assets/icon/person.svg';

interface Component11PageProps {
  problem: {
    qId: number;
    pass: boolean;
    qNum: string;
    orangeNum: number;
    peopleNum: number;
  };
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function Component11Page(props: Component11PageProps) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, pass, qNum, orangeNum, peopleNum } = problem;

  const [son, setSon] = useState(0);
  const [mother, setMother] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [isCorrect, setIsCorrect] = useState(true);

  useEffect(() => {
    if (
      mother === num2 &&
      son === num1 &&
      orangeNum === num1 &&
      peopleNum === num2
    ) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [isSolved, qId]);

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        gap="0.2rem"
        alignItems="left"
        position="relative"
      >
        {isSolved && <CorrectChecker isCorrect={isCorrect} />}
        <Box display="flex">
          <Typography> {qNum} </Typography>
          <Box display="flex" margin="1rem 0.5rem" alignItems="center">
            <img src={orange} alt="icon" />
            <Typography marginRight="0.5rem"> {orangeNum}개</Typography>
            <img src={person} alt="icon" />
            <Typography marginX="0.5rem"> {peopleNum}명 </Typography>
          </Box>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          margin="-1rem 1rem 1rem 2rem"
          gap="0.3rem"
        >
          <NumberInput
            value={num1}
            onChange={e => setNum1(Number(e.target.value))}
          />
          ÷
          <NumberInput
            value={num2}
            onChange={e => setNum2(Number(e.target.value))}
          />
          =
          <DivisionInput
            mother={mother}
            son={son}
            onChangeMother={e => setMother(Number(e.target.value))}
            onChangeSon={e => setSon(Number(e.target.value))}
          />
        </Box>
      </Box>

      <Box display="flex"></Box>
    </>
  );
}
