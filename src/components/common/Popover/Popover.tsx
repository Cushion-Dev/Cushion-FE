import { useState } from 'react';
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
  const [isVisible, setIsVisible] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const handleCloseClick = () => {
    setIsVisible(false);
    if (isChecked) localStorage.setItem('isChecked', String(isChecked));
  };

  const checkIsChecked = (isChecked: boolean) => {
    setIsChecked(isChecked);
  };

  return (
    isVisible && (
      <PopoverContainer>
        <HeaderContainer>
          <LabelText>{title}</LabelText>
          <CloseButton src={ICONS.popover.close} onClick={handleCloseClick} />
        </HeaderContainer>
        <WrapContent>
          <ContentContainer>
            <BodyText>{bodyText}</BodyText>
            <Checkbox caption='체크박스 캡션' onClick={checkIsChecked} />
          </ContentContainer>
        </WrapContent>
        <Pin>
          <PinIcon src={ICONS.popover.pin} />
        </Pin>
      </PopoverContainer>
    )
  );
};

export default Popover;
