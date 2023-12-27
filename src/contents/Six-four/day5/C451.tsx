import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import { NumberInput } from 'src/contents/common/number-box';
import VisualFraction from 'src/contents/common/visual-fraction';

import type { ProblemProp } from './P451';

interface C451Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C451(props: C451Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, pass, answer } = problem;

  const [isCorrect, setIsCorrect] = useState(false);

  const [input, setInput] = useState(false);

  useEffect(() => {
    if (answer === input) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [isSolved, qId]);

  return (
    <>
      {qId !== -1 && (
        <StyledCheckbox
          type="checkbox"
          onChange={e => {
            setInput(e.target.checked);
          }}
        ></StyledCheckbox>
      )}
    </>
  );
}

const StyledCheckbox = styled.input`
  width: 2rem;
  height: 2rem;
`;
