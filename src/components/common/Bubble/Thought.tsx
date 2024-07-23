import {
  ThoughtTextContainer,
  ThoughtText,
} from '../../../styles/common/Bubble/Thought';

interface IThoughtProps {
  thoughtText: string;
}

const Thought = ({ thoughtText }: IThoughtProps) => {
  return (
    <ThoughtTextContainer>
      <ThoughtText>{thoughtText}</ThoughtText>
    </ThoughtTextContainer>
  );
};

export default Thought;
