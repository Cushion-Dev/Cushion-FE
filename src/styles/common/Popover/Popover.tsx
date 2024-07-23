import styled from 'styled-components';

import { semantic } from '../../../styles/semantic';
import { TYPO } from '../../../styles/typo';

const PopoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  position: relative;

  width: 12.5rem;

  border-radius: 1rem;
  background: ${semantic.light.inversed.solid.background};
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;

  gap: 0.75rem;
  padding: 0.5rem 1rem;

  border-bottom: 1px solid ${semantic.light.border.transparent.alternative};
`;

const LabelText = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;

  flex: 1 0 0;

  overflow: hidden;
  text-overflow: ellipsis;

  ${TYPO.label3}
  color: ${semantic.light.inversed.solid.primary};
`;

const CloseButton = styled.img`
  width: 1.125rem;
  height: 1.125rem;

  cursor: pointer;
`;

const WrapContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  gap: 1rem;
  padding: 0.375rem 0.5rem 0.5rem 0.5rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  gap: 0.625rem;
  padding: 0.25rem 0.5rem 0.5rem 0.5rem;
`;

const BodyText = styled.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  align-self: stretch;

  overflow: hidden;
  text-overflow: ellipsis;

  ${TYPO.body1};
  color: ${semantic.light.inversed.solid.secondary};
`;

const Pin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;

  bottom: -0.7rem;
  right: 1rem;

  width: 1.25rem;
  height: 0.75rem;
`;

const PinIcon = styled.img`
  width: 1.25rem;
  height: 0.75rem;
  flex-shrink: 0;

  fill: ${semantic.light.inversed.solid.background};
`;

export {
  PopoverContainer,
  HeaderContainer,
  LabelText,
  CloseButton,
  WrapContent,
  ContentContainer,
  BodyText,
  Pin,
  PinIcon,
};
