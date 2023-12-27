import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import DivisionInput from 'src/contents/common/number-box';
import { CustomTypo } from 'src/contents/common/styled-component';
import VisualFraction from 'src/contents/common/visual-fraction';

interface C123Props {
  problem: {
    qId: number;
    qNum: string;
    mom: number;
    son: number;
    aMom: number;
    aSon: number;
    nature: number;
    pass: boolean;
  };
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C123(props: C123Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, qNum, mom, son, nature, pass, aMom, aSon } = problem;

  const [isCorrect, setIsCorrect] = useState(false);
  const [answerMom, setAnswerMom] = useState<string | number>('');
  const [answerSon, setAnswerSon] = useState<string | number>('');

  useEffect(() => {
    // TODO 정답 체크
    if (aMom === answerMom && aSon === answerSon) {
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
      gap="0.2rem"
      alignItems="center"
      margin="1rem"
      position="relative"
    >
      {isSolved && <CorrectChecker isCorrect={isCorrect} />}
      <CustomTypo marginRight="0.5rem">{qNum}</CustomTypo>
      <VisualFraction momNum={mom} sonNum={son} />
      <CustomTypo> ÷ </CustomTypo>
      <CustomTypo> {nature} = </CustomTypo>
      <DivisionInput
        son={answerSon}
        mother={answerMom}
        onChangeMother={e => setAnswerMom(Number(e.target.value))}
        onChangeSon={e => setAnswerSon(Number(e.target.value))}
        disabled={isSolved}
      />
    </Box>
  );
}
