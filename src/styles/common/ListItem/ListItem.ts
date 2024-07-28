import { styled, css } from 'styled-components';
import { semantic } from '../../semantic';
import { TYPO } from '../../typo';

export type ListContainer = 'empty' | 'list';

const ListContainer = styled.ul<{ $variant?: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  overflow: scroll;
  gap: 1.5rem;

  height: 100%;

  ${({ $variant }) => {
    if ($variant === 'empty')
      return css`
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: stretch;
      `;
  }}
`;

const ListItemContainer = styled.div<{
  $isChecked: boolean;
  disabled: boolean;
  $isEditing: boolean;
}>`
  display: flex;
  width: 30.3125rem;
  padding: 1rem 1.25rem;
  border-radius: 0.75rem;
  ${({ $isEditing }) => $isEditing && `gap: 1rem;`}
  border: 0.06rem solid
    ${({ $isChecked }) =>
    $isChecked
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

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  gap: 1.5rem;
  padding: 0.5rem 1rem;
`;

const EmptyIcon = styled.img`
  width: 4.5rem;
  height: 4.5rem;
`;

const EmptyText = styled.span`
  display: -webkit-box;
  width: 25.5rem;

  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;

  ${TYPO.body3}
  color: ${semantic.light.object.transparent.alternative};
`;

export { ListContainer, ListItemContainer, EmptyState, EmptyIcon, EmptyText };
