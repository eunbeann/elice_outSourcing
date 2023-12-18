import { Box } from '@mui/material';

import ExampleBox from 'src/contents/common/example-box';
import { CustomTypo } from 'src/contents/common/styled-component';

import fractionE121 from 'src/contents/assets/image/fraction-e121.png';
import textE121 from 'src/contents/assets/image/text-e121.png';

export default function E121() {
  return (
    <ExampleBox>
      <CustomTypo fontSize="17px" marginBottom="1rem">
        (분수)÷(자연수)에서 분수의
        <span style={{ color: 'red' }}>
          분자가 자연수의 배수인 경우 분자를 자연수로 나눕니다.
        </span>
      </CustomTypo>
      <Box display="flex" alignItems="center" gap="3rem">
        <img width="25%" height="10%" src={fractionE121} alt="fractionE122" />
        <img width="55%" height="10%" src={textE121} alt="textE121" />
      </Box>
    </ExampleBox>
  );
}
