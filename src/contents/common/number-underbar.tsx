import React from 'react';
import styled from '@emotion/styled';

interface NumberUnderBarProps {
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function NumberUnderBar(props: NumberUnderBarProps) {
  const { value, onChange } = props;
  return (
    <UnderBar
      type="number"
      inputMode="numeric"
      value={value}
      onChange={onChange}
    />
  );
}

const UnderBar = styled.input`
  text-align: center;
  border: none;
  border-bottom: 0.08rem solid gray;
  font-size: 1.2rem;
  width: 3rem;
  height: 2rem;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
