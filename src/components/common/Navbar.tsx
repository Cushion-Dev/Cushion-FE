import { useState } from 'react';

import { Button, ContextMenu } from '..';
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
import styled from 'styled-components';

interface INavbar {
  type: 'global' | 'local' | 'onboarding' | 'nomeat';
  title?: string;
  isEditing?: boolean;
  hasCheckedItems?: boolean;
  onClickMenu?: () => void;
  onDelete?: () => void;
  onClickBackButton?: () => void;
  onSetIsEditing?: (value: boolean) => void;
}

const Navbar = ({
  type,
  title,
  onClickMenu,
  isEditing,
  hasCheckedItems = false,
  onDelete,
  onClickBackButton,
  onSetIsEditing,
}: INavbar) => {
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
          {isEditing && (
            <ButtonWrapper>
              <Button
                type="label"
                size="etc"
                clickFn={() => {
                  if (onSetIsEditing) onSetIsEditing(false);
                }}>
                선택 취소
              </Button>
              <DeleteText $hasCheckedItems={hasCheckedItems} onClick={onDelete}>
                선택한 항목 삭제하기
              </DeleteText>
            </ButtonWrapper>
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
          <BackButton onClick={onClickBackButton} src={ICONS.backButton} />
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

const ButtonWrapper = styled.div`
  display: flex;

  align-items: center;
`;

export default Navbar;
