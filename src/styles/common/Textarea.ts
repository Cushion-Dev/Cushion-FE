import styled, { css } from 'styled-components';

import { TYPO } from '../../styles/typo';
import { semantic } from '../../styles/semantic';

const TextareaContainer = styled.div<{ $isActive: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 30.5rem;

  gap: 0.5rem;
  padding: 1rem;

  border-radius: 0.75rem;
  border: 1px solid
    ${({ $isActive }) =>
      $isActive
        ? semantic.light.accent.solid.normal
        : semantic.light.border.transparent.neutral};
  background: ${semantic.light.bg.solid.light};

  box-sizing: border-box;

  ${({ $isActive }) =>
    $isActive &&
    css`
      background: ${semantic.light.bg.solid.light};
    `}
`;
const WrapTextArea = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;

  height: 5rem;
  gap: 0.3rem;

  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  flex-shrink: 0;

  width: 26.25rem;
  height: 5.5rem;

  padding: 0.2rem 0.125rem;

  border: none;
  outline: none;
  resize: none;

  ${TYPO.body2}
  font-family: 'Pretendard';
  caret-color: ${semantic.light.accent.solid.normal};

  & {
    -ms-overflow-style: none;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
`;

const AddImage = styled.img`
  display: flex;
  align-items: center;

  width: 2rem;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
  }
`;

const Send = styled.img`
  display: flex;
  align-items: center;

  width: 2rem;
  cursor: pointer;
`;

export {
  TextareaContainer,
  WrapTextArea,
  TextArea,
  ButtonContainer,
  AddImage,
  Send,
};
