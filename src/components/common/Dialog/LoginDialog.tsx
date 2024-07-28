import Callout from './Callout';
import LoginButtons from './LoginButton';

import { ICONS } from '../../../styles/common/icons';
import { MESSAGES } from '../../../constants/messages';
import {
  DialogContainer,
  WrapLogo,
  Logo,
  LogoImg,
  TitleText,
  Accent,
  WrapDivider,
  Divider,
} from '../../../styles/common/Dialog/LoginDialog';

interface ILoginDialogProps {
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const LoginDialog = ({ onClick }: ILoginDialogProps) => {
  return (
    <DialogContainer onClick={onClick}>
      <WrapLogo>
        <Logo src={ICONS.logo} />
        <LogoImg src={ICONS.logoImage} />
      </WrapLogo>
      <TitleText>
        <Accent>{MESSAGES.dialog.login.accent}</Accent>
        {MESSAGES.dialog.login.title}
      </TitleText>
      <WrapDivider>
        <Divider />
      </WrapDivider>
      <LoginButtons />
      <Callout
        text={`로그인 시, 쿠션의 <Terms href='/'>이용약관</Terms>)에 동의하는 것으로 간주돼요.`}
        variant="login"
      />
    </DialogContainer>
  );
};

export default LoginDialog;
