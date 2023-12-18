import React from 'react';
import styled from '@emotion/styled';

interface NumberUnderBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TextUnderBar(props: NumberUnderBarProps) {
  const { value, onChange } = props;
  return <UnderBar type="text" value={value} onChange={onChange} />;
}

const UnderBar = styled.input`
  text-align: center;
  border: none;
  border-bottom: 0.08rem solid gray;
  font-size: 2rem;
  width: 8rem;
  height: 3rem;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
