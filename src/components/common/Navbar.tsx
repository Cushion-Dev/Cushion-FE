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
  type: 'global' | 'local';
  title?: string;
}

export const Navbar = ({ type, title }: INavbar) => {
  return (
    <NavContainer>
      {type === 'global' ? (
        <>
          <WrapLogo>
            <Logo src={ICONS.logo} />
            <LogoImg src={ICONS.logoImage} />
          </WrapLogo>
          <MoreButton src={ICONS.moreButton} />
        </>
      ) : (
        <>
          <BackButton src={ICONS.backButton} />
          <TitleText>{title}</TitleText>
          <MoreButton src={ICONS.moreButton} />
        </>
      )}
    </NavContainer>
  );
};

export default Navbar;
