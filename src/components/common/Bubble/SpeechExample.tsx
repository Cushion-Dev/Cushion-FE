import { UserBubble, SystemBubble } from '../../../components';

import { MESSAGES } from '../../../constants/messages';
import { SpeechContainer } from '../../../styles/common/Bubble/SpeechExample';

const SpeechExample = () => {
  return (
    <SpeechContainer>
      <UserBubble bodyText={MESSAGES.speechExample.user} />
      <SystemBubble
        bubblePage="example"
        bodyText={MESSAGES.speechExample.system}
      />
    </SpeechContainer>
  );
};

export default SpeechExample;
