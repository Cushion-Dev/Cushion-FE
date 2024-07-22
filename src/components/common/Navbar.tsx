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
  variant: 'global' | 'local';
  title?: string;
}

export const Navbar = ({ variant, title }: INavbar) => {
  return (
    <NavContainer>
      {variant === 'global' ? (
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
