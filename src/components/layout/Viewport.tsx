import styled from 'styled-components';

const Viewport = ({ children }: IChildren) => {
  return <ViewportContainer>{children}</ViewportContainer>;
};

export default Viewport;

const ViewportContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;

  gap: 2rem;
  flex: 1 0 0;
  padding: 1.5rem 1rem;

  background: linear-gradient(180deg, #fff 0%, #fafaf7 100%);
`;
