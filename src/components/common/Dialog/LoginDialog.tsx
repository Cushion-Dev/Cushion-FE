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

const LoginDialog = () => {
  return (
    <DialogContainer>
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
      <Callout />
    </DialogContainer>
  );
};

export default LoginDialog;
