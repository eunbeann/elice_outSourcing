import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import { NumberInput } from 'src/contents/common/number-box';

import type { ProblemProp } from './P411';

import ArrowRight from '../../assets/icon/arrowRight.svg';

interface C411Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C411(props: C411Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, pass, qNum, numList, answer } = problem;

  const [isCorrect, setIsCorrect] = useState(false);

  const [input1, setInput1] = useState<undefined | number>(undefined);
  const [input2, setInput2] = useState<undefined | number>(undefined);

  useEffect(() => {
    if (answer === input1 && answer === input2) {
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
          <Typography variant="h5" fontWeight={400} marginRight="1rem">
            {qNum}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem">
          <Box display="flex" alignItems="center" gap="0.5rem">
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              {numList[0] ? (
                <Typography variant="h5" fontWeight={600}>
                  {numList[0]}
                </Typography>
              ) : (
                <NumberInput
                  width="2rem"
                  value={Number(input1)}
                  onChange={e => {
                    setInput1(Number(e.target.value));
                  }}
                />
              )}
              <UnderBar />
              {numList[1] ? (
                <Typography variant="h5" fontWeight={600}>
                  {numList[1]}
                </Typography>
              ) : (
                <NumberInput
                  width="2rem"
                  value={Number(input1)}
                  onChange={e => {
                    setInput1(Number(e.target.value));
                  }}
                />
              )}
            </Box>
            <Typography variant="h5" fontWeight={600}>
              =
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              {numList[2] ? (
                <Typography variant="h5" fontWeight={600}>
                  {numList[2]}
                </Typography>
              ) : (
                <NumberInput
                  width="2rem"
                  value={Number(input1)}
                  onChange={e => {
                    setInput1(Number(e.target.value));
                  }}
                />
              )}
              <UnderBar />
              {numList[3] ? (
                <Typography variant="h5" fontWeight={600}>
                  {numList[3]}
                </Typography>
              ) : (
                <NumberInput
                  width="2rem"
                  value={Number(input1)}
                  onChange={e => {
                    setInput1(Number(e.target.value));
                  }}
                />
              )}
            </Box>
          </Box>
          <Avatar
            src={ArrowRight}
            variant="square"
            style={{
              width: '1.5rem',
              height: 'max-content',
              margin: '0rem 0.5rem',
            }}
          />
          <Box display="flex" alignItems="center" gap="0.5rem">
            {numList[0] ? (
              <Typography variant="h5" fontWeight={600}>
                {numList[0]}
              </Typography>
            ) : (
              <NumberInput
                width="2rem"
                value={Number(input2)}
                onChange={e => {
                  setInput2(Number(e.target.value));
                }}
              />
            )}
            <Typography variant="h5" fontWeight={600}>
              :
            </Typography>
            {numList[1] ? (
              <Typography variant="h5" fontWeight={600}>
                {numList[1]}
              </Typography>
            ) : (
              <NumberInput
                width="2rem"
                value={Number(input2)}
                onChange={e => {
                  setInput2(Number(e.target.value));
                }}
              />
            )}
            <Typography variant="h5" fontWeight={600}>
              =
            </Typography>
            {numList[2] ? (
              <Typography variant="h5" fontWeight={600}>
                {numList[2]}
              </Typography>
            ) : (
              <NumberInput
                width="2rem"
                value={Number(input2)}
                onChange={e => {
                  setInput2(Number(e.target.value));
                }}
              />
            )}
            <Typography variant="h5" fontWeight={600}>
              :
            </Typography>
            {numList[3] ? (
              <Typography variant="h5" fontWeight={600}>
                {numList[3]}
              </Typography>
            ) : (
              <NumberInput
                width="2rem"
                value={Number(input2)}
                onChange={e => {
                  setInput2(Number(e.target.value));
                }}
              />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const UnderBar = styled.div`
  width: 1.8rem;
  border-bottom: 0.08rem solid black;
`;
