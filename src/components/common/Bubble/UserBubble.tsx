import {
  MessageContainer,
  BubbleContainer,
  BodyText,
} from '../../../styles/common/Bubble/UserBubble';

interface IUserBubbleProps {
  bodyText: string;
}

const UserBubble = ({ bodyText }: IUserBubbleProps) => {
  return (
    <MessageContainer>
      <BubbleContainer>
        <BodyText>{bodyText}</BodyText>
      </BubbleContainer>
    </MessageContainer>
  );
};

export default UserBubble;
