import { useRef, useEffect } from 'react';
import styled from 'styled-components';

interface ViewPortProps {
  children: React.ReactNode;
  type?: string;
}

const Viewport = ({ children, type }: ViewPortProps) => {
  const viewportRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (type === 'chat' && viewportRef.current) {
      viewportRef.current.scrollTop = viewportRef.current.scrollHeight;
    }
  }, [children]);

  return (
    <ViewportContainer ref={type === 'chat' ? viewportRef : null}>{children}</ViewportContainer>
  );
};

export default Viewport;

const ViewportContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  position: relative;
  overflow: scroll;

  gap: 2rem;
  flex: 1 0 0;
  padding: 1.5rem 1rem;

  background: linear-gradient(180deg, #fff 0%, #fafaf7 100%);
`;
