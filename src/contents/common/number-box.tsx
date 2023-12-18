import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

interface NumberInputProps {
  value: string | number | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  width?: string;
}

export function NumberInput(props: NumberInputProps) {
  const { value, onChange, disabled, width } = props;
  return (
    <NumBox
      width={width}
      type="number"
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
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

interface BigDivisionInputProps {
  mother: number | string;
  son: number | string;
  num: number | string;
  onChangeMother: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSon: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeNum: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export function BigDivisionInput(props: BigDivisionInputProps) {
  const {
    mother,
    son,
    num,
    onChangeNum,
    onChangeMother,
    onChangeSon,
    disabled,
  } = props;
  return (
    <Box display="flex" alignItems="center" gap="0.2rem">
      <NumberInput
        width="2.6rem"
        value={num}
        onChange={onChangeNum}
        disabled={disabled ? true : false}
      />
      <Box
        display="flex"
        flexDirection="column"
        gap="0.1rem"
        marginTop="0.5rem"
      >
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
    </Box>
  );
}

const NumBox = styled.input<{ width?: string }>`
  text-align: center;
  border: 0.08rem solid gray;
  border-radius: 0.5rem;
  width: ${({ width }) => (width ? width : '4rem')};
  height: 2rem;

  font-size: 1.6rem;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Divider = styled.div`
  border: solid 1px gray;
  width: 2rem;
  font-weight: 600;
`;
