import { ICONS } from '../../../styles/common/icons';
import {
  WrapCallout,
  CCallout,
  InfoIcon,
  CalloutText,
  Terms,
} from '../../../styles/common/Dialog/Callout';

const Callout = () => {
  return (
    <WrapCallout>
      <CCallout>
        <InfoIcon src={ICONS.login.information} />
        <CalloutText>
          로그인 시, 쿠션의 <Terms href="/">이용약관</Terms>에 동의하는 것으로 간주돼요.
        </CalloutText>
      </CCallout>
    </WrapCallout>
  );
};

export default Callout;
