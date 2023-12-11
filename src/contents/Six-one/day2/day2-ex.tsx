import { Box, Typography } from '@mui/material';

import ExampleBox from 'src/contents/common/example-box';

export default function Example2Day() {
  return (
    <ExampleBox>
      <Typography fontSize="14px" marginBottom="1rem">
        (분수)÷(자연수)에서 분수의
        <span style={{ color: 'red' }}>
          분자가 자연수의 배수인 경우 분자를 자연수로 나눕니다.
        </span>
      </Typography>
      <Box display="flex" alignItems="center">
        {/* TODO 분수 수정 */}
        <Typography>4 ÷ 2= 4 ÷ 2 = 2 5 5 </Typography>
        <Box bgcolor="beige" padding="0.6rem" marginX="2rem">
          분자를 단위분수인 ⅕의 개수로 생각할 수 있습니다. ⅕ 4개를 2로 나누면 ⅕
          2개가 됩니다.
        </Box>
      </Box>
    </ExampleBox>
  );
}
