import { useEffect, useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import { TextUnderBar } from 'src/contents/common/text-underbar';

import type { ProblemProp } from './P352';

interface C352Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C352(props: C352Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, pass, qNum, imgSrc1, imgSrc2, answer } = problem;

  const [isCorrect, setIsCorrect] = useState(false);

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');

  useEffect(() => {
    if (
      answer.first[0] === input1 &&
      answer.first[1] === input2 &&
      answer.second[0] === input3 &&
      answer.second[1] === input4
    ) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [isSolved, qId]);

  return (
    <Box>
      <Box display="flex" alignItems="start">
        <Box display="flex" alignItems="center" position="relative">
          {isSolved && <CorrectChecker isCorrect={isCorrect} />}
          <Typography variant="h5" fontWeight={600} marginRight="1rem">
            {qNum}
          </Typography>
        </Box>
        <Box display="flex" mb="4rem">
          <Box display="flex" flexDirection="column" gap="2rem">
            <Box
              display="flex"
              gap="0.3rem"
              flexDirection="column"
              alignItems="center"
            >
              <Avatar
                src={imgSrc1}
                variant="square"
                style={{
                  width: '15rem',
                  height: 'max-content',
                }}
              />
              <Box display="flex" alignItems="center" gap="0.5rem">
                <TextUnderBar
                  width="4rem"
                  value={input1}
                  onChange={e => {
                    setInput1(e.target.value);
                  }}
                />
                <Typography variant="h5" fontWeight={600}>
                  :
                </Typography>
                <TextUnderBar
                  width="4rem"
                  value={input2}
                  onChange={e => {
                    setInput2(e.target.value);
                  }}
                />
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              gap="0.3rem"
              alignItems="center"
            >
              <Avatar
                src={imgSrc2}
                variant="square"
                style={{
                  width: '15rem',
                  height: 'max-content',
                }}
              />
              <Box display="flex" alignItems="center" gap="0.5rem">
                <TextUnderBar
                  width="4rem"
                  value={input3}
                  onChange={e => {
                    setInput3(e.target.value);
                  }}
                />
                <Typography variant="h5" fontWeight={600}>
                  :
                </Typography>
                <TextUnderBar
                  width="4rem"
                  value={input4}
                  onChange={e => {
                    setInput4(e.target.value);
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
