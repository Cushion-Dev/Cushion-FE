import Checkbox from './Checkbox';
import { ICONS } from '../../../styles/common/icons';
import {
  PopoverContainer,
  HeaderContainer,
  LabelText,
  CloseButton,
  WrapContent,
  ContentContainer,
  BodyText,
  Pin,
  PinIcon,
} from '../../../styles/common/Popover/Popover';

interface IPopoverProps {
  title: string;
  bodyText: string;
}

const Popover = ({ title, bodyText }: IPopoverProps) => {
  return (
    <PopoverContainer>
      <HeaderContainer>
        <LabelText>{title}</LabelText>
        <CloseButton src={ICONS.popover.close} />
      </HeaderContainer>
      <WrapContent>
        <ContentContainer>
          <BodyText>{bodyText}</BodyText>
          <Checkbox caption="체크박스 캡션" />
        </ContentContainer>
      </WrapContent>
      <Pin>
        <PinIcon src={ICONS.popover.pin} />
      </Pin>
    </PopoverContainer>
  );
};

export default Popover;
