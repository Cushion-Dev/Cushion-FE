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
            <Logo src="/assets/logo/logotype.svg" />
            <LogoImg src="/assets/logo/cushion-vector-asset.svg" />
          </WrapLogo>
          <MoreButton src="/assets/icon/button-more-line.svg" />
        </>
      ) : (
        <>
          <BackButton src="/assets/icon/button-arrow-left-line.svg" />
          <TitleText>{title}</TitleText>
          <MoreButton src="/assets/icon/button-more-line.svg" />
        </>
      )}
    </NavContainer>
  );
};

export default Navbar;
