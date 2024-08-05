// import { useState } from 'react';
import Thought from './Thought';
import { ICONS } from '../../../styles/common/icons';
import { MESSAGES } from '../../../constants/messages';
import {
  MessageContainer,
  Region,
  MessageSection,
  UserLabelContainer,
  LogoImage,
  UserLabel,
  WrapBubble,
  BubbleContainer,
  BodyText,
  Copy,
} from '../../../styles/common/Bubble/SystemBubble';
// import Toast from '../Toast';

export type BubblePage = 'example' | 'greeting' | 'default';

interface ISystemBubbleProps {
  bubblePage?: BubblePage;
  bodyText: string;
  showCopyButton?: boolean;
}

const SystemBubble = ({ bubblePage, bodyText, showCopyButton }: ISystemBubbleProps) => {
  // const [showToast, setShowToast] = useState(false);
  // const handleCopyClick = () => setShowToast(true);

  return (
    <>
      <MessageContainer>
        <Region>
          <MessageSection>
            <UserLabelContainer>
              <LogoImage src={ICONS.logoImage} />
              <UserLabel>쿠션봇 AI</UserLabel>
            </UserLabelContainer>
            <WrapBubble>
              <BubbleContainer>
                <BodyText>{bodyText}</BodyText>
              </BubbleContainer>
            </WrapBubble>
          </MessageSection>
          {bubblePage === 'default' && showCopyButton && <Copy src={ICONS.copy} />}
        </Region>
        {bubblePage === 'example' && <Thought thoughtText={MESSAGES.speechExample.emotion} />}
      </MessageContainer>
      {/* {showToast && <Toast bodyText="내용이 복사되었습니다." />} */}
    </>
  );
};

export default SystemBubble;
