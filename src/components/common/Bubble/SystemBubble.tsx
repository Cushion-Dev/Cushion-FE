import { useState } from 'react';
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
  WrapIcons,
  Copy,
  RefreshButton,
} from '../../../styles/common/Bubble/SystemBubble';
import Toast from '../Toast';

export type BubblePage = 'example' | 'greeting' | 'default';

interface ISystemBubbleProps {
  bubblePage?: BubblePage;
  bodyText: string;
  showCopyButton?: boolean;
  showRefreshButton?: boolean;
  onRefresh?: () => void;
}

const SystemBubble = ({
  bubblePage,
  bodyText,
  showCopyButton,
  showRefreshButton,
  onRefresh,
}: ISystemBubbleProps) => {
  const [showToast, setShowToast] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(bodyText).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    });
  };

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
          <WrapIcons>
            {showRefreshButton && <RefreshButton onClick={onRefresh} src={ICONS.refresh} />}
            {bubblePage === 'default' && showCopyButton && (
              <Copy src={ICONS.copy} onClick={handleCopyClick} />
            )}
          </WrapIcons>
        </Region>
        {bubblePage === 'example' && <Thought thoughtText={MESSAGES.speechExample.emotion} />}
      </MessageContainer>
      {showToast && <Toast bodyText="내용이 복사되었습니다." />}
    </>
  );
};

export default SystemBubble;
