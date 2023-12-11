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
    component: import('./Six-one/day1/p-10'),
  },
  {
    path: 'quiz1-1-2',
    component: import('./Six-one/day1/p-11'),
  },
  {
    path: 'quiz1-1-3',
    component: import('./Six-one/day1/p-12'),
  },
  {
    path: 'quiz1-2-1',
    component: import('./Six-one/day2/p-13'),
  },
  {
    path: 'quiz1-2-2',
    component: import('./Six-one/day2/p-14'),
  },
  {
    path: 'quiz1-2-3',
    component: import('./Six-one/day2/p-15'),
  },
  {
    path: 'quiz3-1-1',
    component: import('./Six-three/day1/P311'),
  },
  {
    path: 'quiz3-2-1',
    component: import('./Six-three/day2/P321'),
  },
  {
    path: 'quiz3-2-2',
    component: import('./Six-three/day2/P322'),
  },
  {
    path: 'quiz3-2-3',
    component: import('./Six-three/day2/P323'),
  },
]);
