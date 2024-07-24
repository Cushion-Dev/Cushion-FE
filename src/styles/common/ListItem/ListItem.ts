import { styled, css } from 'styled-components';
import { semantic } from '../../semantic';

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  flex: 1 0 0;
  align-self: stretch;
`;

export const ListItemContainer = styled.div<{
  isChecked: boolean;
  disabled: boolean;
  isEditing: boolean;
}>`
  display: flex;
  width: 30.3125rem;
  padding: 1rem 1.25rem;
  border-radius: 0.75rem;
  ${({ isEditing }) => isEditing && `gap: 1rem;`}
  border: 0.06rem solid
    ${({ isChecked }) =>
    isChecked
      ? `${semantic.light.accent.solid.normal}`
      : `${semantic.light.border.transparent.neutral}`};
  background: ${semantic.light.bg.solid.light};
  box-shadow: 0px 0px 5.599999904632568px rgba(12, 10, 9, 0.06);
  cursor: pointer;

  ${({ disabled }) =>
    disabled
      ? `background: #f3f3f3; cursor: not-allowed; color: ${semantic.light.object.transparent.disabled};`
      : css`
          &:hover {
            background: #f3f3f3;
          }

          &:active {
            background: #f3f3f3;
          }
        `}
`;
