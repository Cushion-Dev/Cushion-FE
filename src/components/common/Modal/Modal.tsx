import React from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return createPortal(
    <ModalOverlay onClick={onClose}>{children}</ModalOverlay>,
    document.body
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  width: 520px;
  height: 1024px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.43);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Modal;
