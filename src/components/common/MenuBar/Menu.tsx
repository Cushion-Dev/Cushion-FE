import {
  MenuContainer,
  MenuName,
  MenuIcon,
} from '../../../styles/common/MenuBar/Menu';

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
    <MenuContainer onClick={handleClickMenu}>
      <MenuName $variant={variant}>{menuName}</MenuName>
      <MenuIcon src={iconURL} />
    </MenuContainer>
  );
};

export default Menu;
