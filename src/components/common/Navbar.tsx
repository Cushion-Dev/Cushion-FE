import { useState } from 'react';

import { ContextMenu } from '..';
import { ICONS } from '../../styles/common/icons';
import {
  NavContainer,
  WrapLogo,
  Logo,
  LogoImg,
  MoreButton,
  TitleText,
  BackButton,
} from '../../styles/common/Navbar';

interface INavbar {
  type: 'global' | 'local' | 'onboarding';
  title?: string;
}

const Navbar = ({ type, title }: INavbar) => {
  const [showContextMenu, setShowContextMenu] = useState(false);

  const handleMoreButtonClick = () => {
    setShowContextMenu((prevState) => !prevState);
  };

  const handleContextMenuClose = () => {
    setShowContextMenu(false);
  };

  return (
    <NavContainer>
      {type === 'global' ? (
        <>
          <WrapLogo>
            <Logo src={ICONS.logo} />
            <LogoImg src={ICONS.logoImage} />
          </WrapLogo>
          <MoreButton
            src={ICONS.moreButton}
            onClick={handleMoreButtonClick}
            $isActive={showContextMenu}
          />
        </>
      ) : type === 'onboarding' ? (
        <>
          <WrapLogo>
            <Logo src={ICONS.logo} />
            <LogoImg src={ICONS.logoImage} />
          </WrapLogo>
        </>
      ) : (
        <>
          <BackButton src={ICONS.backButton} />
          <TitleText>{title}</TitleText>
          <MoreButton
            src={ICONS.moreButton}
            onClick={handleMoreButtonClick}
            $isActive={showContextMenu}
          />
        </>
      )}
      {showContextMenu && <ContextMenu onClose={handleContextMenuClose} />}
    </NavContainer>
  );
};

export default Navbar;
