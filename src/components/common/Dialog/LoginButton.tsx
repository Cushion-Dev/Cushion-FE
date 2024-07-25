import { ICONS } from '../../../styles/common/icons';
import { MESSAGES } from '../../../constants/messages';
import {
  ButtonContainer,
  LBContainer,
  WrapText,
  Text,
} from '../../../styles/common/Dialog/LoginButton';
import { useEffect } from 'react';
import useLogIn from '../../../hooks/useLogIn';
import useAuthStore from '../../../stores/useAuthStore';
import useUserInfoMutation from '../../../hooks/useUserInfoMutation';
import { API_URI } from '../../../services/api';

interface ILoginButtonProps {
  variant: LoginVariant;
  symbolURL: string;
  text: string;
}

interface UserInfo {
  affiliation: string;
  job: string;
  realName: string;
}

const LoginButton = ({ variant, symbolURL, text }: ILoginButtonProps) => {
  const { isError, login } = useLogIn();
  const { logIn: setLogIn } = useAuthStore();
  const { mutate: postInfo } = useUserInfoMutation();

  const userInfo: UserInfo = {
    affiliation: localStorage.getItem('affliation') || '',
    job: localStorage.getItem('job') || '',
    realName: localStorage.getItem('name') || '',
  };

  useEffect(() => {
    if (isError === false) {
      setLogIn();
      postInfo(userInfo);
    }
  }, [isError]);
  const handleNaverLogin = () => {
    window.location.href = `${API_URI}/members/login/oauth2/naver`;
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
