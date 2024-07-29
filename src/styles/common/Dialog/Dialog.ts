import styled, { css } from 'styled-components';
import { TYPO } from '../../../styles/typo';
import { semantic } from '../../../styles/semantic';

const DialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 28.5rem;

  gap: 1.5rem;
  padding: 1.5rem;

  border-radius: 1.5rem;
  background: ${semantic.light.bg.solid.light};

  box-shadow:
    0px 3.2px 8px 0px rgba(12, 10, 9, 0.13),
    0px 10px 22.3px 0px rgba(12, 10, 9, 0.09),
    0px 22px 43px 0px rgba(12, 10, 9, 0.09),
    0px 0px 10.6px 0px rgba(12, 10, 9, 0.11);
`;

const WrapText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  gap: 1rem;
`;

const TitleText = styled.span`
  align-self: stretch;
  text-align: center;

  ${TYPO.title3}
  color: ${semantic.light.object.solid.hero};
`;

const SubText = styled.span`
  align-self: stretch;
  text-align: center;

  ${TYPO.body2};
  color: ${semantic.light.object.transparent.neutral};
`;

const ButtonContainer = styled.div`
  display: flex;
  align-self: stretch;
  align-items: flex-start;

  gap: 0.75rem;
`;

const Button = styled.button<{ $variant?: ButtonVariant }>`
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 1 0 0;
  gap: 0.5rem;
  padding: 1rem 1rem 1rem 1.25rem;

  border: none;
  border-radius: 0.75rem;

  cursor: pointer;

  ${TYPO.label3};
  text-align: center;

  color: ${semantic.light.object.transparent.alternative};
  background: ${semantic.light.fill.transparent.neutral};

  &:hover {
    background: #cfcfce;
  }

  ${({ $variant }) => {
    if ($variant === 'cta') {
      return css`
        color: ${semantic.light.base.solid.white};
        background: ${semantic.light.accent.solid.normal};

        &:hover {
          background: #dc850b;
        }
      `;
    }

    if ($variant === 'negative') {
      return css`
        background: ${semantic.light.feedback.solid.negative};
        color: ${semantic.light.base.solid.white};

        &:hover {
          background-color: rgba(220, 38, 38, 0.8);
        }
      `;
    }

    if ($variant === 'negative') {
      return css`
        color: ${semantic.light.base.solid.white};
        background: ${semantic.light.feedback.solid.negative};

        &:hover {
          background: #d22525;
        }
      `;
    }
  }}
`;

export {
  DialogContainer,
  WrapText,
  TitleText,
  SubText,
  ButtonContainer,
  Button,
};
