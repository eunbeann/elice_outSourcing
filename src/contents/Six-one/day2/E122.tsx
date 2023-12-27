import { Box, Typography } from '@mui/material';

import ExampleBox from 'src/contents/common/example-box';
import { CustomTypo } from 'src/contents/common/styled-component';

import fractionE122 from 'src/contents/assets/image/P122/fraction-e122.png';

export default function E122() {
  return (
    <ExampleBox>
      <CustomTypo marginBottom="1rem">
        (분수)÷(자연수)에서 분수의
        <span style={{ color: 'red' }}>
          분자가 자연수의 배수가 아닌 경우 분자가 자연수의 배수가 되도록 분수의
          분모, 분자에 같은 수를 곱하고 계산
        </span>
        합니다.
      </CustomTypo>
      <Box display="flex" alignItems="center">
        <img width="55%" height="10%" src={fractionE122} alt="fractionE122" />
        <Box bgcolor="beige" padding="0.6rem" marginX="2rem">
          <Typography>
            분수의 분모, 분자에 곱하는 수가 달라 도 결과는 같지만 곱하는 수에
            따라서 약분을 해야 하는 경우가 있습니다.
          </Typography>
        </Box>
      </Box>
    </ExampleBox>
  );
}
