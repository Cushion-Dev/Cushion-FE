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

export type BubblePage = 'example';

interface ISystemBubbleProps {
  bubblePage?: BubblePage;
  bodyText: string;
}

const SystemBubble = ({ bubblePage, bodyText }: ISystemBubbleProps) => {
  return (
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
        <Copy src={ICONS.copy} />
      </Region>
      {bubblePage === 'example' && (
        <Thought thoughtText={MESSAGES.speechExample.emotion} />
      )}
    </MessageContainer>
  );
};

export default SystemBubble;
