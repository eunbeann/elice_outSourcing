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
  color: var(--White, #fff);
  text-align: center;
  font-family: Elice DX Neolli OTF;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 3.25rem */
`;

const QuestionBox = styled.div`
  top: 12%;
  position: absolute;
  width: 42.5rem;
  min-height: 7vh;
  max-height: 9.3vh;
  background: linear-gradient(
      0deg,
      rgba(255, 118, 19, 0.1) 0%,
      rgba(255, 118, 19, 0.1) 100%
    ),
    var(--White, #fff);
  border: 1px solid rgba(255, 118, 19, 0.5);
  border-radius: 0.625rem;
  line-height: 150%;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
  white-space: pre-wrap;
  padding: 1rem;
`;

const ChildrenBox = styled.div`
  padding: 2rem;
  bottom: 4%;
  left: 14%;
  position: absolute;
  width: 70.67vw;
  height: 70vh;
  background-color: white;
  border: 8px solid rgba(255, 118, 19, 0.5);
  border-radius: 0.75rem;
  overflow: auto;
`;
