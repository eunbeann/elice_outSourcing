import bgDay1Image from '../assets/image/day1-bg.png';
import bgDay2Image from '../assets/image/day2-bg.png';
import bgDay3Image from '../assets/image/day3-bg.png';
import bgDay4Image from '../assets/image/day4-bg.png';
import bgDay5Image from '../assets/image/day5-bg.png';

export type dayType = 'day1' | 'day2' | 'day3' | 'day4' | 'day5';

export interface DayStyles {
  mainColor: string;
  subColor: string;
  bgColor: string;
  bgImage: string;
}

export const setDayStyles = (day: dayType): DayStyles => {
  let mainColor: string, subColor: string, bgColor: string, bgImage: string;

  switch (day) {
    case 'day1':
      mainColor = '#FF6291';
      subColor = '#FFD0DE';
      bgColor = '#FFEFF4';
      bgImage = bgDay1Image;
      break;

    case 'day2':
      mainColor = '#6297FF';
      subColor = '#D0E0FF';
      bgColor = '#EFF5FF';
      bgImage = bgDay2Image;
      break;

    case 'day3':
      mainColor = '#FF7613';
      subColor = '#FFD6B8';
      bgColor = '#FFF1E7';
      bgImage = bgDay3Image;
      break;

    case 'day4':
      mainColor = '#8F6CFF';
      subColor = '#DDD3FF';
      bgColor = '#F4F0FF';
      bgImage = bgDay4Image;
      break;

    case 'day5':
      mainColor = '#00B76A';
      subColor = '#00B76A';
      bgColor = '#E6F8F0';
      bgImage = bgDay5Image;
      break;

    default:
      mainColor = '#FF6291';
      subColor = '#FFD0DE';
      bgColor = '#FFEFF4';
      bgImage = bgDay1Image;
      break;
  }

  return { mainColor, subColor, bgImage, bgColor };
};
