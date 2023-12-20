import styled from '@emotion/styled';

import type { ReactNode } from 'react';

export default function ExampleBox({ children }: { children: ReactNode }) {
  return <CustomBox>{children}</CustomBox>;
}

const CustomBox = styled.div`
  width: 80%;
  padding: 1rem 3rem;

  border-radius: 1.25rem;
  margin-top: 2rem;
  border: 1px solid #c0c0c0;
  background: var(--White, #fff);
  color: #000;
  font-size: 1.5rem;
  font-style: normal;
  line-height: 130%; /* 1.95rem */
`;
