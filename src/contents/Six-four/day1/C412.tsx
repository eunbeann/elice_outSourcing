import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/common/correct-checker';
import { NumberInput } from 'src/contents/common/number-box';

import type { ProblemProp } from './P412';

import ArrowRight from '../../assets/icon/arrowRight.svg';

interface C412Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C412(props: C412Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, pass, qNum, numList, answer } = problem;

  const [isCorrect, setIsCorrect] = useState(false);

  const [input1, setInput1] = useState<undefined | number>(undefined);
  const [input2, setInput2] = useState<undefined | number>(undefined);
  const [input3, setInput3] = useState<undefined | number>(undefined);

  useEffect(() => {
    if (answer[0] === input1 && answer[1] === input2 && answer[1] === input3) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [isSolved, qId]);

  return (
    <Box>
      <Box display="flex" alignItems="start" marginRight="3rem">
        <Box display="flex" alignItems="center">
          {isSolved && <CorrectChecker isCorrect={isCorrect} />}
          <Typography variant="h5" fontWeight={400} marginRight="1rem">
            {qNum}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" gap="1rem">
          <Box display="flex" alignItems="center" gap="0.5rem">
            <Typography variant="h6" fontWeight={600}>
              {numList[0]}
            </Typography>
            <Typography variant="h6" fontWeight={600}>
              :
            </Typography>
            <Typography variant="h6" fontWeight={600}>
              {numList[1]}
            </Typography>
            <Typography variant="h6" fontWeight={600}>
              =
            </Typography>
            <Typography variant="h6" fontWeight={600}>
              ({numList[2]}
            </Typography>
            {qId % 2 === 0 ? (
              <Typography variant="h6" fontWeight={600}>
                ×
              </Typography>
            ) : (
              <Typography variant="h6" fontWeight={600}>
                ÷
              </Typography>
            )}
            {numList[3] ? (
              <Typography variant="h6" fontWeight={600}>
                {numList[3]}
                {')'}
              </Typography>
            ) : (
              <>
                <NumberInput
                  value={Number(input1)}
                  onChange={e => {
                    setInput1(Number(e.target.value));
                  }}
                />
                <Typography variant="h6" fontWeight={600}>
                  {')'}
                </Typography>
              </>
            )}
            <Typography variant="h6" fontWeight={600}>
              {': ('}
              {numList[4]}
            </Typography>
            {qId % 2 === 0 ? (
              <Typography variant="h6" fontWeight={600}>
                ×
              </Typography>
            ) : (
              <Typography variant="h6" fontWeight={600}>
                ÷
              </Typography>
            )}
            {numList[5] ? (
              <Typography variant="h6" fontWeight={600}>
                {numList[5]}
                {')'}
              </Typography>
            ) : (
              <>
                <NumberInput
                  value={Number(input1)}
                  onChange={e => {
                    setInput1(Number(e.target.value));
                  }}
                />
                <Typography variant="h6" fontWeight={600}>
                  {')'}
                </Typography>
              </>
            )}

            <Typography variant="h6" fontWeight={600}>
              =
            </Typography>
            {numList[6] ? (
              <Typography variant="h6" fontWeight={600}>
                {numList[6]}
              </Typography>
            ) : (
              <NumberInput
                value={Number(input2)}
                onChange={e => {
                  setInput2(Number(e.target.value));
                }}
              />
            )}
            <Typography variant="h6" fontWeight={600}>
              :
            </Typography>
            {numList[7] ? (
              <Typography variant="h6" fontWeight={600}>
                {numList[7]}
              </Typography>
            ) : (
              <NumberInput
                value={Number(input2)}
                onChange={e => {
                  setInput2(Number(e.target.value));
                }}
              />
            )}
          </Box>
          <Box display="flex" alignItems="center" gap="1rem" mb="4rem">
            <Avatar
              src={ArrowRight}
              variant="square"
              style={{
                width: '1rem',
                height: 'max-content',
              }}
            />
            <Box display="flex" alignItems="center" gap="0.5rem">
              <Typography variant="h6" fontWeight={600}>
                {numList[0]}
              </Typography>
              <Typography variant="h6" fontWeight={600}>
                :
              </Typography>
              <Typography variant="h6" fontWeight={600}>
                {numList[1]}
              </Typography>
              <Typography variant="h6" fontWeight={600}>
                =
              </Typography>
              {numList[6] ? (
                <Typography variant="h6" fontWeight={600}>
                  {numList[6]}
                </Typography>
              ) : (
                <NumberInput
                  value={Number(input3)}
                  onChange={e => {
                    setInput3(Number(e.target.value));
                  }}
                />
              )}
              <Typography variant="h6" fontWeight={600}>
                :
              </Typography>
              {numList[7] ? (
                <Typography variant="h6" fontWeight={600}>
                  {numList[7]}
                </Typography>
              ) : (
                <NumberInput
                  value={Number(input3)}
                  onChange={e => {
                    setInput3(Number(e.target.value));
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
