import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import { NumberInput } from 'src/contents/common/number-box';

import type { ProblemProp } from './P413';

import ArrowBottomLeft from '../../assets/icon/arrowBottomLeft.svg';
import ArrowBottomRight from '../../assets/icon/arrowBottomRight.svg';
import ArrowRight from '../../assets/icon/arrowRight.svg';

interface C413Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C413(props: C413Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, pass, qNum, numList, answer } = problem;

  const [isCorrect, setIsCorrect] = useState(false);

  const [input1, setInput1] = useState<undefined | number>(undefined);
  const [input2, setInput2] = useState<undefined | number>(undefined);
  const [input3, setInput3] = useState<undefined | number>(undefined);
  const [input4, setInput4] = useState<undefined | number>(undefined);

  useEffect(() => {
    if (
      answer[0] === input1 &&
      answer[0] === input2 &&
      answer[1] === input3 &&
      answer[1] === input4
    ) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [isSolved, qId]);

  return (
    <Box display="flex" mb="5rem">
      <Box display="flex" alignItems="start">
        <Box display="flex" alignItems="center">
          {isSolved && <CorrectChecker isCorrect={isCorrect} />}
          <Typography variant="h5" fontWeight={400} marginRight="1rem">
            {qNum}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column">
          <Box display="flex" gap="0.5rem" alignItems="center">
            <Typography variant="h6" fontWeight={600}>
              ×
            </Typography>
            <NumberInput
              value={Number(input1)}
              onChange={e => {
                setInput1(Number(e.target.value));
              }}
            />
            <Avatar
              src={ArrowBottomLeft}
              variant="square"
              style={{
                width: '1rem',
                height: 'max-content',
              }}
            />
            <Box display="flex" flexDirection="column" gap="1rem">
              <Box display="flex" gap="0.2rem">
                {numList[0] ? (
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    bgcolor="#FAD476"
                    width="2.5rem"
                    border="0.1rem solid black"
                    textAlign="center"
                  >
                    {numList[0]}
                  </Typography>
                ) : (
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    bgcolor="#FAD476"
                    width="2.5rem"
                    border="0.1rem solid black"
                    textAlign="center"
                  >
                    <NumberInput
                      value={Number(input3)}
                      onChange={e => {
                        setInput3(Number(e.target.value));
                      }}
                    />
                  </Typography>
                )}
                <Typography variant="h6" fontWeight={600}>
                  :
                </Typography>
                {numList[1] ? (
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    bgcolor="#FAD476"
                    width="2.5rem"
                    border="0.1rem solid black"
                    textAlign="center"
                  >
                    {numList[1]}
                  </Typography>
                ) : (
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    bgcolor="#FAD476"
                    width="2.5rem"
                    border="0.1rem solid black"
                    textAlign="center"
                  >
                    <NumberInput
                      value={Number(input3)}
                      onChange={e => {
                        setInput3(Number(e.target.value));
                      }}
                    />
                  </Typography>
                )}
              </Box>
              <Box display="flex" gap="0.2rem">
                {numList[2] ? (
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    bgcolor="#ABD5E0"
                    width="2.5rem"
                    border="0.1rem solid black"
                    textAlign="center"
                  >
                    {numList[2]}
                  </Typography>
                ) : (
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    bgcolor="#ABD5E0"
                    width="2.5rem"
                    border="0.1rem solid black"
                    textAlign="center"
                  >
                    <NumberInput
                      value={Number(input3)}
                      onChange={e => {
                        setInput3(Number(e.target.value));
                      }}
                    />
                  </Typography>
                )}
                <Typography variant="h6" fontWeight={600}>
                  :
                </Typography>
                {numList[3] ? (
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    bgcolor="#ABD5E0"
                    width="2.5rem"
                    border="0.1rem solid black"
                    textAlign="center"
                  >
                    {numList[3]}
                  </Typography>
                ) : (
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    bgcolor="#ABD5E0"
                    width="2.5rem"
                    border="0.1rem solid black"
                    textAlign="center"
                  >
                    <NumberInput
                      value={Number(input3)}
                      onChange={e => {
                        setInput3(Number(e.target.value));
                      }}
                    />
                  </Typography>
                )}
              </Box>
            </Box>
            <Avatar
              src={ArrowBottomRight}
              variant="square"
              style={{
                width: '1rem',
                height: 'max-content',
              }}
            />
            <Typography variant="h6" fontWeight={600}>
              ×
            </Typography>
            <NumberInput
              value={Number(input2)}
              onChange={e => {
                setInput2(Number(e.target.value));
              }}
            />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            mt="1rem"
            ml="1rem"
            gap="0.5rem"
          >
            <Avatar
              src={ArrowRight}
              variant="square"
              style={{
                width: '1rem',
                height: 'max-content',
              }}
            />
            <Box display="flex" gap="0.3rem">
              {numList[0] ? (
                <Typography variant="h6" fontWeight={600}>
                  {numList[0]}
                </Typography>
              ) : (
                <NumberInput
                  value={Number(input4)}
                  onChange={e => {
                    setInput4(Number(e.target.value));
                  }}
                />
              )}
              <Typography variant="h6" fontWeight={600}>
                :
              </Typography>
              {numList[1] ? (
                <Typography variant="h6" fontWeight={600}>
                  {numList[1]}
                </Typography>
              ) : (
                <NumberInput
                  value={Number(input4)}
                  onChange={e => {
                    setInput4(Number(e.target.value));
                  }}
                />
              )}
              <Typography variant="h6" fontWeight={600}>
                =
              </Typography>
              {numList[2] ? (
                <Typography variant="h6" fontWeight={600}>
                  {numList[2]}
                </Typography>
              ) : (
                <NumberInput
                  value={Number(input4)}
                  onChange={e => {
                    setInput4(Number(e.target.value));
                  }}
                />
              )}
              <Typography variant="h6" fontWeight={600}>
                :
              </Typography>
              {numList[3] ? (
                <Typography variant="h6" fontWeight={600}>
                  {numList[3]}
                </Typography>
              ) : (
                <NumberInput
                  value={Number(input4)}
                  onChange={e => {
                    setInput4(Number(e.target.value));
                  }}
                />
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
