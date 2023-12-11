import React from 'react';
import styled from '@emotion/styled';

import type { ReactNode } from 'react';

export default function ExampleBox({ children }: { children: ReactNode }) {
  return <CustomBox>{children}</CustomBox>;
}

const CustomBox = styled.div`
  padding: 1rem;
  border-radius: 1.25rem;
  border: 1px solid #c0c0c0;
  background: var(--White, #fff);
`;
