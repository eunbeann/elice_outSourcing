import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import { NumberInput } from 'src/contents/common/number-box';
import VisualFraction from 'src/contents/common/visual-fraction';

import type { ProblemProp } from './P442';

interface C442Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C442(props: C442Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, pass, qNum, num1, num2, num3, num4, answer } = problem;

  const [isCorrect, setIsCorrect] = useState(false);

  const [input1, setInput1] = useState<undefined | number>(undefined);
  const [input2, setInput2] = useState<undefined | number>(undefined);

  useEffect(() => {
    if (answer === input1 && answer === input2) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [isSolved, qId]);

  return (
    <Box display="flex" mb="5rem">
      <Box display="flex" alignItems="center" gap="1rem">
        <Box display="flex" alignItems="center" position="relative">
          {isSolved && <CorrectChecker isCorrect={isCorrect} />}
          <Typography variant="h5" fontWeight={600}>
            {qNum}
          </Typography>
        </Box>
        <Box display="flex" gap="0.3rem" alignItems="center">
          <Typography
            variant="h5"
            fontWeight={600}
            display="flex"
            alignItems="center"
            gap="0.5rem"
          >
            {numList1Type === '정수' ? (
              <>
                {numList1[0]} : {numList1[1]}
              </>
            ) : (
              <>
                <VisualFraction momNum={numList1[1]} sonNum={numList1[0]} /> :
                <VisualFraction momNum={numList1[3]} sonNum={numList1[2]} />
              </>
            )}
            {' = ('}
            {numList2[0]} {qId % 2 === 0 ? '×' : '÷'} {numList2[1]}
            {') : ('}
            <NumberInput
              value={Number(input1)}
              onChange={e => {
                setInput1(Number(e.target.value));
              }}
            />
            {qId % 2 === 0 ? '×' : '÷'} {numList2[1]}
            {') = '}
            {numList2[0]}:
            <NumberInput
              value={Number(input2)}
              onChange={e => {
                setInput2(Number(e.target.value));
              }}
            />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
