import { Box, Typography } from '@mui/material';

import ExampleBox from 'src/contents/common/example-box';
import { BasicVisualFraction } from 'src/contents/common/visual-fraction';

import chick from 'src/contents/assets/icon/1-1-1_8.png';
import apple from 'src/contents/assets/icon/1-1-1_9.png';

export default function ComponentExample() {
  return (
    <ExampleBox>
      <Typography fontSize="1.25rem">
        두 가지 상황의 나눗셈을 비교해 봅시다.
      </Typography>
      <Box>
        <Typography fontSize="1.25rem">
          병아리 3마리를 두 사람이 똑같이 나누어 가지려고 합니다
        </Typography>
        <Box
          margin="1rem 0rem"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <img width="60%" src={chick} alt="chicks" />
          <Typography fontSize="1.25rem"> 3 ÷ 2 = 1 ··· 1 </Typography>
        </Box>
      </Box>
      <Box>
        <Typography fontSize="1.25rem">
          사과 3개를 두 사람이 똑같이 나누어 먹으려고 합니다.
        </Typography>

        <Box
          margin="1rem 0rem"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <img width="60%" src={apple} alt="chicks" />
          <Typography fontSize="1.25rem" display="flex" alignItems="center">
            3 ÷ 2 =
            <span style={{ marginLeft: '0.3ch' }}>
              <BasicVisualFraction
                momNum="2"
                sonNum="1"
                natureNum="1"
                width="1rem"
              />
            </span>
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography fontSize="1.25rem">
          첫 번째 상황은 한 사람당 병아리를 1마리씩 가지고 병아리 1마리가
          남지만, 두 번째 상황은 한 사람당 사과 1개와 절반을 먹으면 됩니다. 이와
          같이 끝까지 똑같이 나누어 나머지가 없는 상황이 존재하고 이 때의 몫은
          분수로 표시할 수 있습니다
        </Typography>
        <br />
      </Box>
      <Box>
        <Typography fontSize="1.25rem">
          첫 번째 상황은 한 사람당 병아리를 1마리씩 가지고 병아리 1마리가
          남지만, 두 번째 상황은 한 사람당 사과 1개와 절반을 먹으면 됩니다. 이와
          같이 끝까지 똑같이 나누어 나머지가 없는 상황이 존재하고 이 때의 몫은
          분수로 표시할 수 있습니다
        </Typography>
        <br />
      </Box>
      <Box>
        <Typography fontSize="1.25rem">
          <span style={{ color: 'red' }}>나눗셈의 몫</span>은 분수에서
          <span style={{ color: 'red' }}>
            분자를 분모만큼으로 똑같이 나눈 것
          </span>
          과 같은 개념이므로 분수로 나타낼 수 있습니다.
        </Typography>
      </Box>

      <Box
        margin="1rem 0rem"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <img width="60%" src={apple} alt="chicks" />
        <Typography fontSize="1.25rem" display="flex" alignItems="center">
          ㉠ ÷ ㉡ =
          <span style={{ marginLeft: '0.3ch' }}>
            <BasicVisualFraction momNum="㉡" sonNum="㉠" />
          </span>
        </Typography>
      </Box>
    </ExampleBox>
  );
}
