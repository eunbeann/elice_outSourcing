import { Image, Numbers } from '@mui/icons-material';
import { Box } from '@mui/material';

import ExampleBox from 'src/contents/common/example-box';
import { CustomTypo } from 'src/contents/common/styled-component';

export default function ComponentExample() {
  // TODO 스타일 먹이기
  return (
    <ExampleBox>
      <CustomTypo>두 가지 상황의 나눗셈을 비교해 봅시다.</CustomTypo>
      <Box>
        <CustomTypo>
          병아리 3마리를 두 사람이 똑같이 나누어 가지려고 합니다
        </CustomTypo>
        {/* TODO 이미지 전달받으면 수정 */}
        <Image />
        <Image />
        <Image />
        <CustomTypo> 3 ÷ 2 = 1 ... 1 </CustomTypo>
      </Box>
      <Box>
        <CustomTypo>
          사과 3개를 두 사람이 똑같이 나누어 먹으려고 합니다.
        </CustomTypo>
        {/* TODO 이미지 전달받으면 수정 */}
        <Image />
        <Image />
        <Image />
        <CustomTypo> 3 ÷ 2 = 11 2 </CustomTypo>
      </Box>
      <Box>
        <CustomTypo>
          첫 번째 상황은 한 사람당 병아리를 1마리씩 가지고 병아리 1마리가
          남지만, 두 번째 상황은 한 사람당 사과 1개와 절반을 먹으면 됩니다. 이와
          같이 끝까지 똑같이 나누어 나머지가 없는 상황이 존재하고 이 때의 몫은
          분수로 표시할 수 있습니다
        </CustomTypo>
        <br />
      </Box>
      <Box>
        <CustomTypo>
          첫 번째 상황은 한 사람당 병아리를 1마리씩 가지고 병아리 1마리가
          남지만, 두 번째 상황은 한 사람당 사과 1개와 절반을 먹으면 됩니다. 이와
          같이 끝까지 똑같이 나누어 나머지가 없는 상황이 존재하고 이 때의 몫은
          분수로 표시할 수 있습니다
        </CustomTypo>
        <br />
      </Box>
      <Box>
        <CustomTypo>
          <span style={{ color: 'red' }}>나눗셈의 몫</span>은 분수에서
          <span style={{ color: 'red' }}>
            분자를 분모만큼으로 똑같이 나눈 것
          </span>
          과 같은 개념이므로 분수로 나타낼 수 있습니다.
        </CustomTypo>
      </Box>
      {/* TODO 이미지 전달받으면 수정 */}
      <Numbers />
    </ExampleBox>
  );
}
