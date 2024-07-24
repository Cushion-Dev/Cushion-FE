import { styled } from 'styled-components';

export const CheckBoxWrapper = styled.div<{ isEditing: boolean }>`
  display: ${({ isEditing }) => (isEditing ? 'flex' : 'none')};
  padding: 0.125rem;
  align-items: center;
  opacity: 1;
`;
