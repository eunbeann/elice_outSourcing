import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import DivisionInput, { NumberInput } from 'src/contents/common/number-box';
import VisualFraction from 'src/contents/common/visual-fraction';

interface C122Props {
  problem: {
    qId: number;
    qNum: string;
    son: number;
    mom1: number;
    num: number;
    mom2: number;
    son2: number;
    pass: boolean;
  };
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C122(props: C122Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, pass, qNum, son, mom1, num, mom2, son2 } = problem;

  const [daughter1, setDaughter1] = useState<string | number>('');
  const [daughter2, setDaughter2] = useState<string | number>('');
  const [mother, setMother] = useState<string | number>('');
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    // TODO 정답 체크
    if (
      daughter1 === Math.floor((mom2 / mom1) * son) &&
      mother === mom2 &&
      daughter2 === Math.floor(daughter1 / son2)
    ) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [isSolved, qId]);

  return (
    <Box
      display="flex"
      minWidth="18rem"
      gap="0.2rem"
      alignItems="center"
      margin="1rem"
      position="relative"
      sx={{
        overflow: 'hidden',
        overflowY: 'scroll',
      }}
    >
      {isSolved && <CorrectChecker isCorrect={isCorrect} />}
      <Typography marginRight="0.5rem">{qNum}</Typography>
      <VisualFraction momNum={mom1} sonNum={son} />
      <Typography fontSize="20px"> ÷ {num} = </Typography>
      <VisualFraction
        width="6rem"
        momNum={mom2}
        sonNum={
          <Box display="flex" alignItems="center">
            <NumberInput
              value={daughter1}
              onChange={e => setDaughter1(Number(e.target.value))}
              disabled={isSolved}
            />
            <Typography fontSize="20px" marginLeft="0.2rem">
              ÷ {son2}
            </Typography>
          </Box>
        }
      />
      <Typography fontSize="20px"> = </Typography>
      <DivisionInput
        son={daughter2}
        mother={mother}
        onChangeMother={e => setMother(Number(e.target.value))}
        onChangeSon={e => setDaughter2(Number(e.target.value))}
        disabled={isSolved}
      />
    </Box>
  );
}
