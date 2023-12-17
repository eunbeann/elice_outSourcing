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
    component: import('./Six-one/day1/P111'),
  },
  {
    path: 'quiz1-1-2',
    component: import('./Six-one/day1/P112'),
  },
  {
    path: 'quiz1-1-3',
    component: import('./Six-one/day1/P113'),
  },
  {
    path: 'quiz1-2-1',
    component: import('./Six-one/day2/P121'),
  },
  {
    path: 'quiz1-2-2',
    component: import('./Six-one/day2/P122'),
  },
  {
    path: 'quiz1-2-3',
    component: import('./Six-one/day2/P123'),
  },
  {
    path: 'quiz1-3-1',
    component: import('./Six-one/day3/P131'),
  },
  {
    path: 'quiz1-3-2',
    component: import('./Six-one/day3/P132'),
  },
  {
    path: 'quiz1-3-3',
    component: import('./Six-one/day3/P133'),
  },
  {
    path: 'quiz1-4-1',
    component: import('./Six-one/day4/P141'),
  },
  {
    path: 'quiz1-4-3',
    component: import('./Six-one/day4/P143'),
  },
  {
    path: 'quiz1-5-1',
    component: import('./Six-one/day5/P151'),
  },
  {
    path: 'quiz2-1-1',
    component: import('./Six-two/day1/P211'),
  },
  {
    path: 'quiz2-1-2',
    component: import('./Six-two/day1/P212'),
  },
  {
    path: 'quiz2-1-3',
    component: import('./Six-two/day1/P213'),
  },
  {
    path: 'quiz2-2-1',
    component: import('./Six-two/day2/P221'),
  },
  {
    path: 'quiz2-2-2',
    component: import('./Six-two/day2/P222'),
  },
  {
    path: 'quiz2-2-3',
    component: import('./Six-two/day2/P223'),
  },
  {
    path: 'quiz2-4-2',
    component: import('./Six-two/day4/P242'),
  },
  {
    path: 'quiz2-4-3',
    component: import('./Six-two/day4/P243'),
  },
  {
    path: 'quiz2-5-2',
    component: import('./Six-two/day5/P252'),
  },
  {
    path: 'quiz2-5-3',
    component: import('./Six-two/day5/P253'),
  },
]);
