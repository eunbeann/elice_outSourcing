import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

interface NumberInputProps {
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export function NumberInput(props: NumberInputProps) {
  const { value, onChange, disabled } = props;
  return (
    <NumBox type="text" value={value} onChange={onChange} disabled={disabled} />
  );
}

interface DivisionInputProps {
  mother: number | string;
  son: number | string;
  onChangeMother: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSon: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export default function DivisionInput(props: DivisionInputProps) {
  const { mother, son, onChangeMother, onChangeSon, disabled } = props;
  return (
    <Box display="flex" flexDirection="column" gap="0.1rem" marginTop="0.5rem">
      <NumberInput
        value={son}
        onChange={onChangeSon}
        disabled={disabled ? true : false}
      />
      <Divider />
      <NumberInput
        value={mother}
        onChange={onChangeMother}
        disabled={disabled ? true : false}
      />
    </Box>
  );
}

const NumBox = styled.input`
  text-align: center;
  border: 0.08rem solid black;
  border-radius: 0.5rem;
  width: 2rem;
  height: 2rem;
  font-weight: 600;
`;

const Divider = styled.div`
  border: solid 1px black;
  width: 2rem;
`;
