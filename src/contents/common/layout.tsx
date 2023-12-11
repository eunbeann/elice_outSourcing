import styled from '@emotion/styled';

import type { ReactNode } from 'react';

import bgImage from '../assets/image/day1-bg.png';

interface LayoutProps {
  children: ReactNode;
  title: string;
  question: string;
  day?: dayType;
}

type dayType = 'day1' | 'day2' | 'day3' | 'day4' | 'day5';

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
  white-space: break-spaces;
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
  padding: 1rem;
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

// // inprogress

// export default function Layout(props: LayoutProps) {
//   const getStylesForDay = (day: dayType) => {
//     let mainColor, subColor, bgImage;

//     switch (day) {
//       case 'day1':
//         mainColor = '#FF6291'; // 빨간색
//         subColor = '#FFD0DE'; // 초록색
//         bgImage = 'day1.jpg'; // day1에 대한 배경 이미지
//         break;

//       case 'day2':
//         mainColor = '#0000ff'; // 파란색
//         subColor = '#ffff00'; // 노란색
//         bgImage = 'day2.jpg'; // day2에 대한 배경 이미지
//         break;

//       case 'day3':
//         mainColor = '#800080'; // 보라색
//         subColor = '#ff4500'; // 주황색
//         bgImage = 'day3.jpg'; // day3에 대한 배경 이미지
//         break;

//       case 'day4':
//         mainColor = '#00ffff'; // 청록색
//         subColor = '#ffa500'; // 주황색
//         bgImage = 'day4.jpg'; // day4에 대한 배경 이미지
//         break;

//       case 'day5':
//         mainColor = '#800000'; // 갈색
//         subColor = '#008080'; // 청록색
//         bgImage = 'day5.jpg'; // day5에 대한 배경 이미지
//         break;

//       default:
//         mainColor = '#000000'; // 기본값: 검은색
//         subColor = '#ffffff'; // 기본값: 흰색
//         bgImage = 'default.jpg'; // 기본값: 기본 배경 이미지
//         break;
//     }

//     return { mainColor, subColor, bgImage };
//   };
