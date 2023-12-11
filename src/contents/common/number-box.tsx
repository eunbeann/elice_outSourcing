import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

interface NumberInputProps {
  value: string | number | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function NumberInput(props: NumberInputProps) {
  const { value, onChange } = props;
  return (
    <NumBox
      type="number"
      inputMode="numeric"
      value={value}
      onChange={onChange}
    />
  );
}

interface DivisionInputProps {
  mother: number | string;
  son: number | string;
  onChangeMother: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSon: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function DivisionInput(props: DivisionInputProps) {
  const { mother, son, onChangeMother, onChangeSon } = props;
  return (
    <Box display="flex" flexDirection="column" gap="0.1rem" marginTop="0.5rem">
      <NumberInput value={son} onChange={onChangeSon} />
      <Divider />
      <NumberInput value={mother} onChange={onChangeMother} />
    </Box>
  );
}

const NumBox = styled.input`
  text-align: center;
  border: 0.08rem solid black;
  border-radius: 0.5rem;
  width: 2rem;
  height: 2rem;
  font-size: 1.2rem;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Divider = styled.div`
  border: solid 1px black;
  width: 2rem;
`;
