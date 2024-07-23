import { styled } from 'styled-components';

export const CheckBoxWrapper = styled.div<{ isEditing: boolean }>`
  display: ${({ isEditing }) => (isEditing ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;
