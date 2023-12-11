import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Apple, Person } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import DivisionInput, { NumberInput } from 'src/contents/common/number-box';
import { NumberUnderBar } from 'src/contents/common/number-underbar';
import VisualFraction from 'src/contents/common/visual-fraction';

import type { ProblemProp } from './P311';

interface C311Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

type Fraction = [number | undefined, number | undefined];

export default function C311(props: C311Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, pass, qNum, top, bottom, firstType, secondType, thirdType } =
    problem;

  const [firstAnswer, setFirstAnswer] = useState<number | Fraction | undefined>(
    firstType === 'integer' ? undefined : [undefined, undefined]
  );
  const [secondAnswer, setSecondAnswer] = useState<
    number | Fraction | undefined
  >(secondType === 'integer' ? undefined : [undefined, undefined]);

  const [thirdAnswer, setThirdAnswer] = useState<number | Fraction | undefined>(
    thirdType === 'integer' ? undefined : [undefined, undefined]
  );

  // const [isCorrect, setIsCorrect] = useState(false);

  // useEffect(() => {
  //   if (son === apples && mother === people) {
  //     setIsCorrect(true);
  //     handleCorrectChange(qId, true);
  //   } else {
  //     setIsCorrect(false);
  //     handleCorrectChange(qId, false);
  //   }
  // }, [isSolved, qId]);

  return (
    <Box>
      <Box display="flex" alignItems="center" margin="1rem 2rem">
        {/* {isSolved && <CorrectChecker isCorrect={isCorrect} />} */}
        <Typography variant="h5" marginRight="1rem">
          ①
        </Typography>
        <Typography variant="h5" fontWeight={600} marginRight="1rem">
          {top} ÷ {bottom} =
        </Typography>
        {firstType === 'integer' ? (
          <NumberUnderBar
            value={Number(firstAnswer)}
            onChange={e => {
              setFirstAnswer(Number(e.target.value));
            }}
          />
        ) : (
          <FractionBox>
            <NumberInput
              value={Number(firstAnswer)}
              onChange={e => {
                setFirstAnswer(Number(e.target.value));
              }}
            />
            <Bar />
            <NumberInput
              value={Number(firstAnswer)}
              onChange={e => {
                setFirstAnswer(Number(e.target.value));
              }}
            />
          </FractionBox>
        )}
      </Box>
    </Box>
  );
}

const FractionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
`;

const Bar = styled.div`
  width: 2rem;
  border-bottom: 0.08rem solid gray;
`;
