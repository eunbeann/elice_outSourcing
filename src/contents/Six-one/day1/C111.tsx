import { useEffect, useState } from 'react';
import { Apple, Person } from '@mui/icons-material';
import { Box } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import DivisionInput from 'src/contents/common/number-box';
import { CustomTypo } from 'src/contents/common/styled-component';

import number1Image from 'src/contents/assets/icon/1-1-1_num1_full.png';
import number2Image from 'src/contents/assets/icon/1-1-1_num2Full.png';

interface C111Props {
  problem: {
    qId: number;
    pass: boolean;
    qNum: string;
    apples: number;
    people: number;
  };
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C111(props: C111Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, pass, qNum, apples, people } = problem;
  const [mother, setMother] = useState<string | number>('');
  const [son, setSon] = useState<string | number>('');
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (son === apples && mother === people) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [isSolved, qId]);

  return (
    <Box position="relative" height="8rem">
      <Box>
        <Box display="flex" margin="1rem 2rem" position="relative">
          {isSolved && <CorrectChecker isCorrect={isCorrect} />}
          <CustomTypo marginRight="1rem">{qNum}</CustomTypo>
          <img
            width={qId === 0 ? '55%' : '65%'}
            src={qId === 0 ? number1Image : number2Image}
            alt="fiveApples and two People"
          />
        </Box>
        <Box
          top="3.5rem"
          right={qId === 0 ? '8.8rem' : '7rem'}
          display="flex"
          position="absolute"
          flexDirection="column"
          marginTop="-0.5rem"
          marginLeft="2rem"
        >
          <DivisionInput
            mother={mother}
            son={son}
            onChangeMother={e => setMother(Number(e.target.value))}
            onChangeSon={e => setSon(Number(e.target.value))}
            disabled={isSolved}
          />
        </Box>
      </Box>
    </Box>
  );
}
