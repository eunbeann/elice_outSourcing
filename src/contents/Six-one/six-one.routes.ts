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
  // {
  //   path: 'example-exercise',
  //   component: import('./{example-exercise}/{example-exercise}'),
  // },
  {
    path: 'day1-example',
    component: import('./day1-exercise/c-ex'),
  },
  {
    path: 'day1-p10',
    component: import('./day1-exercise/p-10'),
  },
  {
    path: 'day1-p11',
    component: import('./day1-exercise/p-11'),
  },
  {
    path: 'day1-p12',
    component: import('./day1-exercise/p-12'),
  },
]);
