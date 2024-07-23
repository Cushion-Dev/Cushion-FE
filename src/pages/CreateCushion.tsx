import {
  Container,
  AppScreen,
  Navbar,
  Viewport,
  Divider,
  Textarea,
  SystemBubble,
  UserBubble,
} from '../components';
import styled from 'styled-components';
import { TYPO } from '../styles/typo';
import { semantic } from '../styles/semantic';
import { MESSAGES } from '../constants/messages';

const CreateCushion = () => {
  return (
    <Container>
      <AppScreen>
        <Navbar type="local" title="홍길동(상사)님과의 쿠션" />
        <Viewport>
          <ChatInfoContainer>
            <DateStamp>2024.7.19.금</DateStamp>
            <IntroText>{MESSAGES.introText}</IntroText>
          </ChatInfoContainer>
          <Divider variant="chat" />
          <SystemBubble
            bubblePage="greeting"
            bodyText={MESSAGES.systemMessage.startMessage('홍길동(상사)')}
          />
          <UserBubble bodyText={MESSAGES.systemMessage.exampleMessage} />
          <SystemBubble bodyText={MESSAGES.systemMessage.systemExample} />
        </Viewport>
        <TextFieldContainer>
          <Textarea />
        </TextFieldContainer>
      </AppScreen>
    </Container>
  );
};

export default CreateCushion;

const ChatInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  gap: 1rem;
  padding: 1rem 0;
`;

const DateStamp = styled.span`
  text-align: center;

  ${TYPO.caption2}
  color: ${semantic.light.object.transparent.alternative};
`;

const IntroText = styled.span`
  text-align: center;
  color: ${semantic.light.object.transparent.alternative};

  ${TYPO.caption2}
`;

const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  padding: 1rem 1rem 1.5rem 1rem;

  border-top: 1px solid ${semantic.light.border.transparent.neutral};
  background: ${semantic.light.bg.solid.heavy};
`;
