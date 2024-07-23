import styled from 'styled-components';

import { semantic } from '../../../styles/semantic';
import { TYPO } from '../../../styles/typo';

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

const WrapLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
`;

const Logo = styled.img`
  width: 3.0625rem;
  height: 1.75rem;
`;

const LogoImg = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;

const TitleText = styled.span`
  align-self: stretch;
  text-align: center;

  ${TYPO.title2}
  color: ${semantic.light.object.solid.hero};
`;

const Accent = styled.span`
  ${TYPO.title2}
  color: ${semantic.light.accent.solid.hero};
`;

const WrapDivider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  height: 0.0625rem;
  padding-top: 0.0625rem;
`;

const Divider = styled.div`
  width: 25.5rem;
  height: 0.0625rem;
  background: ${semantic.light.border.transparent.neutral};
`;

export { DialogContainer, WrapLogo, Logo, LogoImg, TitleText, Accent, WrapDivider, Divider };
