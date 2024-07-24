import styled from 'styled-components';
import { semantic } from '../../styles/semantic';
import { TYPO } from '../../styles/typo';

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  position: relative;

  width: 32.5rem;
  height: 3.75rem;

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

const MoreButton = styled.img<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  position: absolute;
  right: 1rem;

  padding: 0.125rem;
  cursor: pointer;

  &:hover {
    border-radius: 0.25rem;
    background-color: #f7f7f7;
  }
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
  position: absolute;
  left: 1rem;

  width: 1.75rem;
  height: 1.75rem;

  cursor: pointer;

  &:hover {
    border-radius: 0.25rem;
    background-color: #f7f7f7;
  }
`;

export {
  NavContainer,
  WrapLogo,
  Logo,
  LogoImg,
  MoreButton,
  TitleText,
  BackButton,
};
