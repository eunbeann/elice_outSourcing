/* ========================================================
 * !!! 안내 !!!
 * 해당 파일은 예시 실습 파일입니다.
 * 실습 자료 제작에 대한 자세한 내용은 프로젝트 README.md를 참고해주세요.
 *
 * !!! Notice !!!
 * This is an example exercise file.
 * For more information on creating exercise materials,
 * please refer to the project README.md.
 * ======================================================== */

import { createEliceExtRoutes } from '@elice/extcontent-utils';

//
//
//

export default createEliceExtRoutes([
  {
    path: 'quiz1-1-1',
    component: import('./day1/p-10'),
  },
  {
    path: 'quiz1-1-2',
    component: import('./day1/p-11'),
  },
  {
    path: 'quiz1-1-3',
    component: import('./day1/p-12'),
  },
  {
    path: 'quiz1-2-1',
    component: import('./day2/p-13'),
  },
  {
    path: 'quiz1-2-2',
    component: import('./day2/p-14'),
  },
  {
    path: 'quiz1-2-3',
    component: import('./day2/p-15'),
  },
  // {
  //   path: 'day3-p16',
  //   component: import('./day3/p-16'),
  // },
  // {
  //   path: 'day3-p17',
  //   component: import('./day3/p-17'),
  // },
  // {
  //   path: 'day3-p18',
  //   component: import('./day3/p-18'),
  // },
  // {
  //   path: 'day4-p19',
  //   component: import('./day4/p-19'),
  // },
  // {
  //   path: 'day4-p20',
  //   component: import('./day4/p-20'),
  // },
  // {
  //   path: 'day4-p21',
  //   component: import('./day4/p-21'),
  // },
  // {
  //   path: 'day5-p22',
  //   component: import('./day5/p-22'),
  // },
  // {
  //   path: 'day5-p23',
  //   component: import('./day5/p-23'),
  // },
  // {
  //   path: 'day5-p24',
  //   component: import('./day5/p-24'),
  // },
]);
