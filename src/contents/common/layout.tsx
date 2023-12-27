import styled from '@emotion/styled';

import { type dayType, setDayStyles } from '../utils/day-styles';

import type { ReactNode } from 'react';
interface LayoutProps {
  children: ReactNode;
  title: string;
  question: string;
  day: dayType;
}

export default function Layout(props: LayoutProps) {
  const { children, title, question, day } = props;
  const { mainColor, subColor, bgImage, bgColor } = setDayStyles(day);
  return (
    <BgImg url={bgImage}>
      <Flex>
        <TitleBox mainColor={mainColor}>{title}</TitleBox>
        <QuestionBox subColor={subColor} bgColor={bgColor}>
          {question}
        </QuestionBox>
        <ChildrenBox mainColor={mainColor}>{children}</ChildrenBox>
      </Flex>
    </BgImg>
  );
}

const BgImg = styled.div<{ url: string }>`
  height: 100%;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleBox = styled.header<{ mainColor: string }>`
  width: 30vw;
  border-radius: 0px 0px 30px 30px;
  background: ${props => props.mainColor};
  display: inline-flex;
  padding: 30px 30px 13px 30px;
  margin-bottom: 2rem;
  justify-content: center;
  color: var(--White, #fff);
  text-align: center;
  font-family: Elice DX Neolli;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 3.25rem */
`;

const QuestionBox = styled.div<{
  subColor: string;
  bgColor: string;
}>`
  padding: 1rem 2rem;
  white-space: break-spaces;
  width: 42.5rem;
  background: ${props => props.bgColor};
  border: ${props => `1px solid ${props.subColor}`};
  border-radius: 0.625rem;
  line-height: 150%;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
  white-space: pre-wrap;
  font-weight: 500;
`;

const ChildrenBox = styled.div<{ mainColor: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0rem;
  padding: 1rem 2rem;
  width: 71vw;
  height: 70vh;
  background-color: white;
  border: ${props => `8px solid ${props.mainColor}`};
  border-radius: 0.75rem;
  overflow: auto;
  font-weight: 600;
`;
