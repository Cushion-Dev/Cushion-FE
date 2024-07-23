import styled from 'styled-components';
import { semantic } from '../../../styles/semantic';
import { TYPO } from '../../../styles/typo';

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  width: 100%;
  gap: 0.5rem;
`;

const Region = styled.article`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
`;

const MessageSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

const UserLabelContainer = styled.div`
  display: flex;
  align-self: stretch;
  align-items: center;
  gap: 0.375rem;
`;

const LogoImage = styled.img`
  width: 1.125rem;
  height: 1.125rem;
`;

const UserLabel = styled.span`
  ${TYPO.label3};
  color: ${semantic.light.object.transparent.neutral};
`;

const WrapBubble = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  align-items: flex-start;

  padding-left: 1rem;
  gap: 0.625rem;
`;

const BubbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1rem;
  padding: 0.625rem 1rem;

  border-radius: 0rem 1rem 1rem 1rem;
  border: 1px solid ${semantic.light.border.transparent.neutral};
  background: ${semantic.light.bg.solid.light};

  box-shadow:
    0px 1.2px 0.8px 0px rgba(12, 10, 9, 0.04),
    0px 2.1px 1.6px 0px rgba(12, 10, 9, 0.03),
    0px 0px 5.6px 0px rgba(12, 10, 9, 0.06);
`;

const BodyText = styled.span`
  align-self: stretch;
  max-width: 18.3125rem;

  ${TYPO.body2};
  color: ${semantic.light.object.solid.normal};
`;

const Copy = styled.img`
  display: flex;
  align-items: center;

  padding: 0.125rem;
  cursor: pointer;
`;

export {
  MessageContainer,
  Region,
  MessageSection,
  UserLabelContainer,
  LogoImage,
  UserLabel,
  WrapBubble,
  BubbleContainer,
  BodyText,
  Copy,
};
