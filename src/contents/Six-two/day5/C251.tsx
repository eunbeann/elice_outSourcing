import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import { AnswerInput } from 'src/contents/common/number-box';
import { CustomTypo } from 'src/contents/common/styled-component';
import VisualFraction from 'src/contents/common/visual-fraction';

import arrowRight from 'src/contents/assets/icon/arrowRight.svg';
interface C251Props {
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

export default function C251(props: C251Props) {
  const [isCorrect, setIsCorrect] = useState(false);
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, qNum, sonNum, momNum, answer, pass } = problem;
  const [enter, setEnter] = useState<number | string>('');

  useEffect(() => {
    if (enter === answer) {
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
      alignContent="center"
      alignItems="center"
      margin="2rem"
      position="relative"
    >
      {isSolved && <CorrectChecker isCorrect={isCorrect} />}
      <CustomTypo> {qNum}</CustomTypo>
      <VisualFraction momNum={momNum} sonNum={sonNum} />
      <Box marginX="1rem">
        <img width="20rem" src={arrowRight} alt="chicks" />
      </Box>
      <AnswerInput
        width="2.5rem"
        value={enter}
        onChange={e => setEnter(Number(e.target.value))}
        disabled={isSolved}
      />
    </Box>
  );
}
