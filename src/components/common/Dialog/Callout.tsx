import { ICONS } from '../../../styles/common/icons';
import {
  WrapCallout,
  CCallout,
  InfoIcon,
  CalloutText,
  Terms,
} from '../../../styles/common/Dialog/Callout';

export type CalloutVariant = 'login';

interface CalloutProps {
  text: string;
  variant: CalloutVariant;
}

const Callout = ({ text, variant }: CalloutProps) => {
  return (
    <WrapCallout>
      <CCallout>
        <InfoIcon src={ICONS.login.information} />

        {variant === 'login' ? (
          <CalloutText>
            {`로그인 시, 쿠션의 `}
            <Terms href="https://pentagonal-tuna-017.notion.site/26ccf78bb7234d4cbdbbbbf503363b99?pvs=4">
              이용약관
            </Terms>
            에 동의하는 것으로 간주돼요.
          </CalloutText>
        ) : (
          <CalloutText>{text}</CalloutText>
        )}
      </CCallout>
    </WrapCallout>
  );
};

export default Callout;
