import styled from 'styled-components';
import { semantic } from '../../styles/semantic';
import { TYPO } from '../../styles/typo';

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  width: 32.5rem;
  height: 3.75rem;

  gap: 1rem;
  padding: 1rem;

  opacity: 1;
  border-bottom: 1px solid ${semantic.light.border.transparent.alternative};
  background: ${semantic.light.bg.solid.light};
`;

const WrapLogo = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 0;

  gap: 0.375rem;
  padding: 0rem;
`;

const Logo = styled.img`
  width: 3.0625rem;
  height: 1.75rem;
`;

const LogoImg = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;

const MoreButton = styled.img`
  display: flex;
  align-items: center;

  padding: 0.125rem;
`;

const TitleText = styled.span`
  display: -webkit-box;
  flex: 1 0 0;

  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;

  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;

  ${TYPO.title2};
  color: ${semantic.light.object.solid.normal};
`;

const BackButton = styled.img`
  flex-shrink: 0;

  width: 1.75rem;
  height: 1.75rem;
`;

export { NavContainer, WrapLogo, Logo, LogoImg, MoreButton, TitleText, BackButton };
