import { useEffect, useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import { NumberInput } from 'src/contents/common/number-box';

import type { ProblemProp } from './P453';

import RedCard from '../../assets/image/P453/4-5-3_1.png';
import GreenCard from '../../assets/image/P453/4-5-3_2.png';
import BlueCard from '../../assets/image/P453/4-5-3_3.png';
import Arrow from '../../assets/image/P453/4-5-3_4.png';

interface C453Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C453(props: C453Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, pass, qNum, cardNumList, index, num, answer } = problem;

  const [isCorrect, setIsCorrect] = useState(false);

  const [input1, setInput1] = useState<undefined | number>(undefined);
  const [input2, setInput2] = useState<undefined | number>(undefined);
  const [input3, setInput3] = useState<undefined | number>(undefined);
  const [input4, setInput4] = useState<undefined | number>(undefined);
  const [input5, setInput5] = useState<undefined | number>(undefined);
  const [input6, setInput6] = useState<undefined | number>(undefined);

  useEffect(() => {
    if (
      input1 === answer[0] &&
      input2 === answer[1] &&
      input3 === answer[2] &&
      input4 === answer[3] &&
      input5 === answer[4] &&
      input6 === answer[5]
    ) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [isSolved, qId]);

  return (
    <Box display="flex">
      <Box display="flex" alignItems="start" gap="1rem">
        <Box display="flex" alignItems="center" position="relative">
          {isSolved && <CorrectChecker isCorrect={isCorrect} />}
          <Typography variant="h5" fontWeight={600}>
            {qNum}
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          gap="1rem"
          width="100%"
          height="100%"
        >
          <Box display="flex" gap="1rem">
            <Box position="relative" width="4rem" height="5rem">
              <Avatar
                src={RedCard}
                variant="square"
                style={{
                  width: '4rem',
                  height: 'max-content',
                  marginBottom: '2rem',
                  position: 'absolute',
                }}
              />
              <Typography
                variant="h5"
                fontWeight={600}
                display="flex"
                alignItems="center"
                gap="0.5rem"
                position="absolute"
                top="30%"
                left="38%"
              >
                {cardNumList[0]}
              </Typography>
            </Box>
            <Box position="relative" width="4rem" height="100%">
              <Avatar
                src={GreenCard}
                variant="square"
                style={{
                  width: '4rem',
                  height: 'max-content',
                  marginBottom: '2rem',
                  position: 'absolute',
                }}
              />
              <Typography
                variant="h5"
                fontWeight={600}
                display="flex"
                alignItems="center"
                gap="0.5rem"
                position="absolute"
                top="30%"
                left="38%"
              >
                {cardNumList[1]}
              </Typography>
            </Box>
            <Box position="relative" width="4rem" height="100%">
              <Avatar
                src={BlueCard}
                variant="square"
                style={{
                  width: '4rem',
                  height: 'max-content',
                  marginBottom: '2rem',
                  position: 'absolute',
                }}
              />
              <Typography
                variant="h5"
                fontWeight={600}
                display="flex"
                alignItems="center"
                gap="0.5rem"
                position="absolute"
                top="30%"
                left="28%"
              >
                {cardNumList[2]}
              </Typography>
            </Box>
          </Box>
          <Box display="flex" gap="1rem">
            <Avatar
              src={Arrow}
              variant="square"
              style={{
                width: '2rem',
                height: 'max-content',
                marginBottom: '2rem',
              }}
            />
            <Typography
              variant="h5"
              fontWeight={600}
              display="flex"
              alignItems="center"
              gap="0.5rem"
            >
              {index === 0 ? (
                <Box display="flex" flexDirection="column" gap="1rem">
                  <Box display="flex" gap="0.5rem">
                    <>{num}</>
                    {' : '}
                    <NumberInput
                      value={input1}
                      onChange={e => setInput1(Number(e.target.value))}
                    />
                    {' = '}
                    <NumberInput
                      value={input2}
                      onChange={e => setInput2(Number(e.target.value))}
                    />
                    {' : '}
                    <NumberInput
                      value={input3}
                      onChange={e => setInput3(Number(e.target.value))}
                    />
                  </Box>
                  <Box display="flex" gap="0.5rem">
                    <>{num}</>
                    {' : '}
                    <NumberInput
                      value={input4}
                      onChange={e => setInput4(Number(e.target.value))}
                    />
                    {' = '}
                    <NumberInput
                      value={input5}
                      onChange={e => setInput5(Number(e.target.value))}
                    />
                    {' : '}
                    <NumberInput
                      value={input6}
                      onChange={e => setInput6(Number(e.target.value))}
                    />
                  </Box>
                </Box>
              ) : index === 1 ? (
                <Box display="flex" flexDirection="column" gap="1rem">
                  <Box display="flex" gap="0.5rem">
                    <NumberInput
                      value={input1}
                      onChange={e => setInput1(Number(e.target.value))}
                    />
                    {' : '}
                    {num}
                    {' = '}
                    <NumberInput
                      value={input2}
                      onChange={e => setInput2(Number(e.target.value))}
                    />
                    {' : '}
                    <NumberInput
                      value={input3}
                      onChange={e => setInput3(Number(e.target.value))}
                    />
                  </Box>
                  <Box display="flex" gap="0.5rem">
                    <NumberInput
                      value={input4}
                      onChange={e => setInput4(Number(e.target.value))}
                    />
                    {' : '}
                    {num}
                    {' = '}
                    <NumberInput
                      value={input5}
                      onChange={e => setInput5(Number(e.target.value))}
                    />
                    {' : '}
                    <NumberInput
                      value={input6}
                      onChange={e => setInput6(Number(e.target.value))}
                    />
                  </Box>
                </Box>
              ) : index === 2 ? (
                <Box display="flex" flexDirection="column" gap="1rem">
                  <Box display="flex" gap="0.5rem">
                    <NumberInput
                      value={input1}
                      onChange={e => setInput1(Number(e.target.value))}
                    />
                    {' : '}

                    <NumberInput
                      value={input2}
                      onChange={e => setInput2(Number(e.target.value))}
                    />
                    {' = '}
                    {num}

                    {' : '}

                    <NumberInput
                      value={input3}
                      onChange={e => setInput3(Number(e.target.value))}
                    />
                  </Box>
                  <Box display="flex" gap="0.5rem">
                    <NumberInput
                      value={input4}
                      onChange={e => setInput4(Number(e.target.value))}
                    />
                    {' : '}

                    <NumberInput
                      value={input5}
                      onChange={e => setInput5(Number(e.target.value))}
                    />
                    {' = '}
                    {num}

                    {' : '}

                    <NumberInput
                      value={input6}
                      onChange={e => setInput6(Number(e.target.value))}
                    />
                  </Box>
                </Box>
              ) : (
                <Box display="flex" flexDirection="column" gap="1rem">
                  <Box display="flex" gap="0.5rem">
                    <NumberInput
                      value={input1}
                      onChange={e => setInput1(Number(e.target.value))}
                    />
                    {' : '}
                    <NumberInput
                      value={input2}
                      onChange={e => setInput2(Number(e.target.value))}
                    />
                    {' = '}
                    <NumberInput
                      value={input3}
                      onChange={e => setInput3(Number(e.target.value))}
                    />
                    {' : '}
                    {num}
                  </Box>
                  <Box display="flex" gap="0.5rem">
                    <NumberInput
                      value={input4}
                      onChange={e => setInput4(Number(e.target.value))}
                    />
                    {' : '}
                    <NumberInput
                      value={input5}
                      onChange={e => setInput5(Number(e.target.value))}
                    />
                    {' = '}
                    <NumberInput
                      value={input6}
                      onChange={e => setInput6(Number(e.target.value))}
                    />
                    {' : '}
                    {num}
                  </Box>
                </Box>
              )}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
