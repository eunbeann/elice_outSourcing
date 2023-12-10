import styled from '@emotion/styled';
import { Box } from '@mui/material';

import type { ReactNode } from 'react';

import bgImage from '../assets/image/day1-bg.png';

interface LayoutProps {
  children: ReactNode;
  title: string;
  question: string;
}

export default function Layout(props: LayoutProps) {
  const { children, title, question } = props;
  return (
    <BgImg url={bgImage}>
      <Flex>
        <TitleBox>{title}</TitleBox>
        <QuestionBox>{question} </QuestionBox>
        <ChildrenBox>{children}</ChildrenBox>
      </Flex>
    </BgImg>
  );
}

const BgImg = styled.div<{ url: string }>`
  height: 100vh;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  justify-content: center;
  align-items: center;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleBox = styled.header`
  width: fit-content;
  border-radius: 0px 0px 30px 30px;
  background: #ff7613;
  display: inline-flex;
  padding: 30px 30px 13px 30px;
  margin-bottom: 2rem;
  justify-content: center;
  align-items: center;
  color: var(--White, #fff);
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 52px */
`;

const QuestionBox = styled.div`
  width: fit-content;
  display: inline-flex;
  padding: 2rem 7rem;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid rgba(255, 118, 19, 0.5);
  background: linear-gradient(
      0deg,
      rgba(255, 118, 19, 0.1) 0%,
      rgba(255, 118, 19, 0.1) 100%
    ),
    var(--White, #fff);
  color: var(--Black, #2b1840);
  text-align: center;

  /* pretendard-m-24 */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  white-space: break-spaces;
`;

const ChildrenBox = styled.div`
  margin: 30px;
  padding: 3rem;
  border-radius: 20px;
  border: 10px solid #fff1e7;
  background: var(--White, #fff);
  color: #000;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 24px */
`;
