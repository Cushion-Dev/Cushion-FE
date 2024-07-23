import { MenuContainer, MenuName, MenuIcon } from '../../../styles/common/MenuBar/Menu';

interface IMenuProps {
  menuName: string;
  iconURL: string;
  variant?: FontColor;
}

const Menu = ({ menuName, iconURL, variant }: IMenuProps) => {
  return (
    <MenuContainer>
      <MenuName $variant={variant}>{menuName}</MenuName>
      <MenuIcon src={iconURL} />
    </MenuContainer>
  );
};

export default Menu;
