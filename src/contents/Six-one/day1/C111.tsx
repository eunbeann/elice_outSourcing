import { useEffect, useState } from 'react';
import { Apple, Person } from '@mui/icons-material';
import { Box } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import DivisionInput from 'src/contents/common/number-box';
import { CustomTypo } from 'src/contents/common/styled-component';

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

  const renderApples = () => {
    const appleComponents = [];

    for (let i = 0; i < apples; i++) {
      appleComponents.push(<Apple key={i} />);
    }

    return appleComponents;
  };
  const renderPeople = () => {
    const peopleComponents = [];
    for (let i = 0; i < people; i++) {
      peopleComponents.push(<Person key={i} />);
    }
    return peopleComponents;
  };

  return (
    <Box>
      <Box display="flex" margin="1rem 2rem" position="relative">
        {isSolved && <CorrectChecker isCorrect={isCorrect} />}
        <CustomTypo marginRight="1rem">{qNum}</CustomTypo>
        {renderApples()}
      </Box>
      <Box display="flex" marginLeft="4rem">
        <Box>{renderPeople()}</Box>
        <Box
          display="flex"
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
