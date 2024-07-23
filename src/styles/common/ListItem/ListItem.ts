import { styled, css } from 'styled-components';
import { semantic } from '../../semantic';

export const ListItemContainer = styled.div<{
  isChecked: boolean;
  disabled: boolean;
}>`
  display: flex;
  width: 485px;
  padding: 16px 20px;
  border-radius: 12px;
  border: 1px solid
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
