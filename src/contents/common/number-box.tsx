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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value === '' ? undefined : event.target.value;

    const newEvent = {
      ...event,
      target: { ...event.target, value: newValue },
    };

    onChange(newEvent as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <NumBox
      width={width}
      type="number"
      value={value}
      onChange={handleChange}
      disabled={disabled}
    />
  );
}

export function AnswerInput(props: NumberInputProps) {
  const { value, onChange, disabled, width } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value === '' ? undefined : event.target.value;

    const newEvent = {
      ...event,
      target: { ...event.target, value: newValue },
    };

    onChange(newEvent as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <Answer
      width={width}
      type="number"
      value={value}
      onChange={handleChange}
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
  width?: string;
}

export default function DivisionInput(props: DivisionInputProps) {
  const { mother, son, onChangeMother, onChangeSon, disabled, width } = props;
  return (
    <Box display="flex" flexDirection="column" gap="0.1rem" marginTop="0.5rem">
      <NumberInput
        width={width}
        value={son}
        onChange={onChangeSon}
        disabled={disabled ? true : false}
      />
      <Divider width={width} />
      <NumberInput
        width={width}
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
  width?: string;
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
    width,
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
          width={width}
          value={son}
          onChange={onChangeSon}
          disabled={disabled ? true : false}
        />
        <Divider />
        <NumberInput
          width={width}
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
  width: ${({ width }) => (width ? width : '2.5rem')};
  height: 2rem;

  font-size: 1.6rem;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Divider = styled.div<{ width?: string }>`
  border: solid 1px grey;
  width: ${props => (props.width ? props.width : '2.5rem')};
`;

const Answer = styled.input<{ width?: string }>`
  text-align: center;
  width: ${props => (props.width ? props.width : '4rem')};
  height: 2rem;
  font-size: 1.5rem;
  border: solid #909090 0.1rem;
  border-radius: 5px;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  :focus {
    outline: none;
    box-shadow: none;
  }

  -moz-appearance: textfield;
`;
