import React from 'react';
import styled, { keyframes } from 'styled-components';
import { createPortal } from 'react-dom';
import { semantic } from '../../../styles/semantic';

interface ModalProps {
  children: React.ReactNode;
  type: 'modal' | 'bottomSheet';
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, type, onClose }) => {
  return createPortal(
    <ModalOverlay type={type} onClick={onClose}>
      <ContentWrapper onClick={(e) => e.stopPropagation()}>
        {children}
      </ContentWrapper>
    </ModalOverlay>,
    document.body
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  0% {
      transform: translateY(100%);
    }
  100% {
    transform: translateY(0);
  }
`;

const ModalOverlay = styled.div<{ type: ModalProps['type'] }>`
  width: 32.5rem;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${({ type }) =>
    type === 'modal'
      ? `padding: 17.8125rem 2rem 17.75rem 2rem; justify-content: center;`
      : `padding-top: 15.25rem; justify-content: flex-end`};

  background: ${semantic.light.bg.transparent.dimmed};
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const ContentWrapper = styled.div`
  animation: ${slideIn} 240ms cubic-bezier(0.5, 0.1, 0.34, 1);
`;

export default Modal;
