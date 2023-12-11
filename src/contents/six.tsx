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

import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Pretendard Variable',
  },
});

export default function Example() {
  return (
    <ThemeProvider theme={theme}>
      <Outlet />
    </ThemeProvider>
  );
}
