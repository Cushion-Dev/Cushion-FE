import {
  MenuContainer,
  MenuName,
  MenuIcon,
} from '../../../styles/common/MenuBar/Menu';
import { ReactComponent as EditProfileIcon } from '../../../../public/assets/icon/menu/button-file-edit-line.svg';

interface IMenuProps {
  menuName: string;
  iconURL: string;
  variant?: FontColor;
  clickFn?: () => void;
  onClose: () => void;
}

const Menu = ({ menuName, iconURL, variant, clickFn, onClose }: IMenuProps) => {
  const handleClickMenu = () => {
    if (clickFn) clickFn();
    onClose();
  };
  return (
    <MenuContainer onClick={handleClickMenu} menuName={menuName}>
      <MenuName $variant={variant} menuName={menuName}>
        {menuName}
      </MenuName>
      {menuName !== '내 정보 수정' && <MenuIcon src={iconURL} />}
      {menuName === '내 정보 수정' && <EditProfileIcon />}
    </MenuContainer>
  );
};

export default Menu;
