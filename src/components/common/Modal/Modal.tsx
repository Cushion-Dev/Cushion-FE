import React from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

interface ModalProps {
  children: React.ReactNode;
  type: 'modal' | 'bottomSheet';
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, type, onClose }) => {
  return createPortal(
    <ModalOverlay type={type} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </ModalOverlay>,
    document.body
  );
};

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

  background: rgba(0, 0, 0, 0.43);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Modal;
