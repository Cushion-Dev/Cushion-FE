import { ICONS } from '../../../styles/common/icons';
import { MESSAGES } from '../../../constants/messages';
import {
  ButtonContainer,
  LBContainer,
  WrapText,
  Text,
} from '../../../styles/common/Dialog/LoginButton';

import { API_URI } from '../../../services/api';

interface ILoginButtonProps {
  variant: LoginVariant;
  symbolURL: string;
  text: string;
}

const LoginButton = ({ variant, symbolURL, text }: ILoginButtonProps) => {
  const handleNaverLogin = () => {
    window.location.href = `${API_URI}/members/login/oauth2/${variant}`;
  };

  return (
    <LBContainer onClick={handleNaverLogin} $variant={variant}>
      <img src={symbolURL} />
      <WrapText>
        <Text $variant={variant}>{text}</Text>
      </WrapText>
    </LBContainer>
  );
};

const LoginButtons = () => {
  return (
    <ButtonContainer>
      <LoginButton
        variant='naver'
        symbolURL={ICONS.login.naver}
        text={MESSAGES.dialog.login.text('네이버')}
      ></LoginButton>
      <LoginButton
        variant='kakao'
        symbolURL={ICONS.login.kakao}
        text={MESSAGES.dialog.login.text('카카오')}
      ></LoginButton>
      <LoginButton
        variant='google'
        symbolURL={ICONS.login.google}
        text={MESSAGES.dialog.login.text('Google')}
      ></LoginButton>
    </ButtonContainer>
  );
};

export default LoginButtons;
