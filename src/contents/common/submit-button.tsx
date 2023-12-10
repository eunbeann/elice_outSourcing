import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';

interface SubmitButtonProps {
  onClick: () => void;
  $color: string;
  isSolved: boolean;
}

export default function SubmitButton(props: SubmitButtonProps) {
  const { onClick, $color, isSolved } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginY: '2rem',
      }}
    >
      <CustomButton onClick={onClick} $color={$color} $isClicked={isSolved}>
        {isSolved ? '다시풀기' : '제출하기'}
      </CustomButton>
    </Box>
  );
}

interface CustomButtonProps {
  $isClicked?: boolean;
  $color?: string;
}

const CustomButton = styled(Button)<CustomButtonProps>`
  /* layout */
  display: flex;
  padding: 1rem 2.5rem;
  margin: 1rem;
  gap: 0.625rem;
  flex-shrink: 0;

  /* style */
  border-radius: 0.625rem;
  background: ${props => (props.$isClicked ? '#ffff' : props.$color)};
  border: 4px solid ${props => props.$color};

  /* font */
  color: ${props => (props.$isClicked ? props.$color : '#ffff')};
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 1.875rem */

  &:hover {
    border-radius: 0.625rem;
    background: ${props => (props.$isClicked ? '#fffff' : props.$color)};
    border: 4px solid ${props => props.$color};
    color: ${props => (props.$isClicked ? props.$color : '#fffff')};
  }
`;
