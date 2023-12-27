import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import DivisionInput, { NumberInput } from 'src/contents/common/number-box';
import { CustomTypo } from 'src/contents/common/styled-component';
interface C241Props {
  problem: {
    qId: number;
    qNum: string;
    sonNum: number;
    momNum: number;
    answer: number;
    pass: boolean;
    nature?: number;
  };
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}
export default function C241(props: C241Props) {
  const [isCorrect, setIsCorrect] = useState(false);
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, qNum, sonNum, momNum, answer, pass, nature } = problem;
  const [aMom, setAMom] = useState<number | string>('');
  const [aSon, setASon] = useState<number | string>('');
  const [aNature, setANature] = useState<number | string>('');

  useEffect(() => {
    if (aMom === momNum && aSon === sonNum) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
      if (aNature === nature) {
        setIsCorrect(true);
        handleCorrectChange(qId, true);
      }
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
        <CustomTypo marginX="0.3rem"> = </CustomTypo>
        {nature && (
          <Box marginRight="0.3rem">
            <NumberInput
              value={aNature}
              onChange={e => setANature(Number(e.target.value))}
              disabled={isSolved}
            />
          </Box>
        )}
        <DivisionInput
          width="3rem"
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
