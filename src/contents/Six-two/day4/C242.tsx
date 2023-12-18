import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import DivisionInput from 'src/contents/common/number-box';
import { CustomTypo } from 'src/contents/common/styled-component';
interface C242Props {
  problem: {
    qId: number;
    qNum: string;
    sonNum: number;
    momNum: number;
    answer: number;
    pass: boolean;
  };
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}
export default function C242(props: C242Props) {
  const [isCorrect, setIsCorrect] = useState(false);
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, qNum, sonNum, momNum, answer, pass } = problem;
  const [aMom, setAMom] = useState<number | string>('');
  const [aSon, setASon] = useState<number | string>('');

  useEffect(() => {
    if (aMom === momNum && aSon === sonNum) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [isSolved, qId]);

  return (
    <Box display="flex" gap="0.2rem" margin="2rem" position="relative">
      {isSolved && <CorrectChecker isCorrect={isCorrect} />}
      <CustomTypo> {qNum} </CustomTypo>
      <Box display="flex" alignItems="center">
        <CustomTypo>{answer}</CustomTypo>
        <CustomTypo marginRight="1rem"> = </CustomTypo>
        <DivisionInput
          mother={aMom}
          son={aSon}
          onChangeMother={e => setAMom(Number(e.target.value))}
          onChangeSon={e => setASon(Number(e.target.value))}
          disabled={isSolved}
        />
      </Box>
    </Box>
  );
}

export const AnswerInput = styled.input`
  width: 4rem;
  height: 2rem;
  border: solid #ededee 0.1rem;
  border-radius: 5px;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  :focus {
    outline: none;
    box-shadow: none;
  }

  -moz-appearance: textfield;
`;
