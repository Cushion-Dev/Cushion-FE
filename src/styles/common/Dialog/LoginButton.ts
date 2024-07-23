import styled, { css } from 'styled-components';
import { TYPO } from '../../../styles/typo';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  gap: 1rem;
`;

const LBContainer = styled.button<{ $variant: LoginVariant }>`
  display: flex;
  align-items: center;
  align-self: stretch;

  height: 3rem;
  padding: 0 1rem;

  border: none;
  border-radius: 0.5rem;

  cursor: pointer;

  ${({ $variant }) => {
    switch ($variant) {
      case 'naver':
        return css`
          background: #03c75a;
        `;
      case 'kakao':
        return css`
          background: #fee500;
        `;
      case 'google':
        return css`
          border: 1px solid #d3d6db;
          background: #fff;
        `;
    }
  }}
`;

const WrapText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const Text = styled.span<{ $variant: LoginVariant }>`
  text-align: center;

  ${TYPO.label3}

  ${({ $variant }) => {
    switch ($variant) {
      case 'naver':
        return css`
          color: #fff;
        `;
      case 'kakao':
        return css`
          color: rgba(0, 0, 0, 0.85);
        `;
      case 'google':
        return css`
          color: #000;
        `;
    }
  }}
`;

export { ButtonContainer, LBContainer, WrapText, Text };
