import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  DeleteText,
} from '../../styles/common/Navbar';

interface INavbar {
  type: 'global' | 'local' | 'onboarding' | 'nomeat';
  title?: string;
  isEditing: boolean;
  hasCheckedItems: boolean;
  onClickMenu: () => void;
  onDelete: () => void;
}

const Navbar = ({ type, title, onClickMenu, isEditing, hasCheckedItems, onDelete }: INavbar) => {
  const navigate = useNavigate();
  const [showContextMenu, setShowContextMenu] = useState(false);

  const handleMoreButtonClick = () => {
    setShowContextMenu((prevState) => !prevState);
  };

  const handleContextMenuClose = () => {
    setShowContextMenu(false);
  };

  const handleBackButtonClick = () => navigate(-1);

  return (
    <NavContainer>
      {type === 'global' ? (
        <>
          <WrapLogo>
            <Logo src={ICONS.logo} />
            <LogoImg src={ICONS.logoImage} />
          </WrapLogo>
          {isEditing && (
            <DeleteText hasCheckedItems={hasCheckedItems} onClick={onDelete}>
              선택한 항목 삭제하기
            </DeleteText>
          )}
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
          <BackButton onClick={handleBackButtonClick} src={ICONS.backButton} />
          <TitleText>{title}</TitleText>

          {type !== 'nomeat' && (
            <MoreButton
              src={ICONS.moreButton}
              onClick={handleMoreButtonClick}
              $isActive={showContextMenu}
            />
          )}
        </>
      )}
      {showContextMenu && (
        <ContextMenu
          type={type === 'global' || type === 'local' ? type : undefined}
          onClose={handleContextMenuClose}
          onClickMenu={onClickMenu}
        />
      )}
    </NavContainer>
  );
};

export default Navbar;
