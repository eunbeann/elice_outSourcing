import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import DivisionInput from 'src/contents/common/number-box';

interface C113Props {
  problem: {
    qId: number;
    pass: boolean;
    qNum: string;
    lNum: number;
    rNum: number;
  };
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C113(props: C113Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, pass, qNum, lNum, rNum } = problem;

  const [son, setSon] = useState(0);
  const [mother, setMother] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (son === lNum && mother === rNum) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [isSolved, qId]);

  return (
    <Box display="flex" gap="0.2rem" alignItems="center" position="relative">
      {isSolved && <CorrectChecker isCorrect={isCorrect} />}
      <Typography>{qNum}</Typography>
      <Typography>
        {lNum} ÷ {rNum} =
      </Typography>
      <DivisionInput
        mother={mother}
        son={son}
        onChangeMother={e => setMother(Number(e.target.value))}
        onChangeSon={e => setSon(Number(e.target.value))}
        disabled={isSolved}
      />
    </Box>
  );
}
