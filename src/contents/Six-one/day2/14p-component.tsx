import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import DivisionInput from 'src/contents/common/number-box';
import VisualFraction from 'src/contents/common/visual-fraction';

interface Component14PageProps {
  problem: {
    qId: number;
    qNum: string;
    mom: number;
    son: number;
    nature: number;
    pass: boolean;
  };
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function Component14Page(props: Component14PageProps) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, qNum, mom, son, nature, pass } = problem;

  const [isCorrect, setIsCorrect] = useState(false);
  const [answerMom, setAnswerMom] = useState(0);
  const [answerSon, setAnswerSon] = useState(0);

  useEffect(() => {
    // TODO 정답 체크
    if (true) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [isSolved, qId]);

  return (
    <Box display="flex" gap="0.2rem" alignItems="center" margin="1rem">
      {isSolved && <CorrectChecker isCorrect={isCorrect} />}
      <Typography marginRight="0.5rem">{qNum}</Typography>
      <VisualFraction momNum={mom} sonNum={son} />
      <Typography fontSize="20px"> ÷ </Typography>
      <Typography fontSize="20px"> {nature} = </Typography>
      <DivisionInput
        son={answerMom}
        mother={answerMom}
        onChangeMother={e => setAnswerMom(Number(e.target.value))}
        onChangeSon={e => setAnswerSon(Number(e.target.value))}
      />
    </Box>
  );
}
