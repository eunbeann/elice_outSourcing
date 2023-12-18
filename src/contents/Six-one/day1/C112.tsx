import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import DivisionInput, { NumberInput } from 'src/contents/common/number-box';
import { CustomTypo } from 'src/contents/common/styled-component';

import orange from 'src/contents/assets/icon/orange.svg';
import person from 'src/contents/assets/icon/person.svg';

interface C113Props {
  problem: {
    qId: number;
    pass: boolean;
    qNum: string;
    orangeNum: number;
    peopleNum: number;
  };
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C113(props: C113Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, pass, qNum, orangeNum, peopleNum } = problem;

  const [son, setSon] = useState<string | number>('');
  const [mother, setMother] = useState<string | number>('');
  const [num1, setNum1] = useState<string | number>('');
  const [num2, setNum2] = useState<string | number>('');
  const [isCorrect, setIsCorrect] = useState(true);

  useEffect(() => {
    if (
      mother === num2 &&
      son === num1 &&
      orangeNum === num1 &&
      peopleNum === num2
    ) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [isSolved, qId]);

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        gap="0.2rem"
        alignItems="left"
        position="relative"
      >
        {isSolved && <CorrectChecker isCorrect={isCorrect} />}
        <Box display="flex">
          <CustomTypo> {qNum} </CustomTypo>
          <Box display="flex" margin="1rem 0.5rem" alignItems="center">
            <img src={orange} alt="icon" />
            <CustomTypo marginRight="0.5rem"> {orangeNum}개</CustomTypo>
            <img src={person} alt="icon" />
            <CustomTypo marginX="0.5rem"> {peopleNum}명 </CustomTypo>
          </Box>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          margin="-1rem 1rem 1rem 2rem"
          gap="0.3rem"
        >
          <NumberInput
            value={num1}
            onChange={e => setNum1(Number(e.target.value))}
            disabled={isSolved}
          />
          ÷
          <NumberInput
            value={num2}
            onChange={e => setNum2(Number(e.target.value))}
            disabled={isSolved}
          />
          =
          <DivisionInput
            mother={mother}
            son={son}
            onChangeMother={e => setMother(Number(e.target.value))}
            onChangeSon={e => setSon(Number(e.target.value))}
            disabled={isSolved}
          />
        </Box>
      </Box>

      <Box display="flex"></Box>
    </>
  );
}
