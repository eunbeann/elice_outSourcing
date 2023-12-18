import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import DivisionInput from 'src/contents/common/number-box';
import { CustomTypo } from 'src/contents/common/styled-component';

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

  const [son, setSon] = useState<string | number>('');
  const [mother, setMother] = useState<string | number>('');
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
      <CustomTypo>{qNum}</CustomTypo>
      <CustomTypo marginRight="0.5rem">
        {lNum} ÷ {rNum} =
      </CustomTypo>
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
