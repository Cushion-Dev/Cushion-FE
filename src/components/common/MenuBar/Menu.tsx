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
}

const Menu = ({ menuName, iconURL, variant, clickFn }: IMenuProps) => {
  return (
    <MenuContainer onClick={clickFn}>
      <MenuName $variant={variant}>{menuName}</MenuName>
      <MenuIcon src={iconURL} />
    </MenuContainer>
  );
};

export default Menu;
