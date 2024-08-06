import { styled } from 'styled-components';
import { semantic } from '../../semantic';
import { TYPO } from '../../typo';

export const Card = styled.div`
  display: flex;
  width: 32.5rem;
  height: 48.5rem;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 1.5rem 1.5rem 0 0;
  background: linear-gradient(180deg, #fff 0%, #fafaf7 100%);
  box-shadow:
    0px 3.2px 8px 0px rgba(12, 10, 9, 0.13),
    0px 10px 22.3px 0px rgba(12, 10, 9, 0.09),
    0px 22px 43px 0px rgba(238, 181, 152, 0.09),
    0px 0px 10.6px 0px rgba(12, 10, 9, 0.11);
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  width: 32.5rem;
  height: 3.75rem;

  gap: 1rem;
  padding: 1rem;

  opacity: 1;
  border-bottom: 1px solid ${semantic.light.border.transparent.alternative};
`;

export const DisplayBanner = styled.div`
  display: flex;
  padding: 1.5rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  align-self: stretch;
`;

export const BannerTitle = styled.p`
  align-self: stretch;

  color: ${semantic.light.object.solid.hero};
  text-align: center;

  ${TYPO.display1}
`;

export const BannerDescription = styled.p`
  align-self: stretch;
  color: ${semantic.light.object.transparent.alternative};
  text-align: center;

  ${TYPO.title1}
`;
