import { useState } from 'react';

import { ICONS } from '../../../styles/common/icons';
import { MESSAGES } from '../../../constants/messages';

import Attach from '../Attach/Attach';
import Button from '../button/Button';
import MakeCushion from './MakeCushion';
import EditProfile from './EditProfile';
import Viewport from '../../layout/Viewport';
import ButtonContainer from '../../layout/ButtonContainer';
import { BackButton, TitleText } from '../../../styles/common/Navbar';
import {
  BannerDescription,
  BannerTitle,
  Card,
  DisplayBanner,
  Nav,
} from '../../../styles/common/BottomSheet/BottomSheet';
import { useSelectedStore } from '../../../stores/useSelectButtonStore';

interface BottomSheetProps {
  messageType: string;
  type: string;
  buttonFn?: () => void;
}

interface IMessage {
  title: string;
  bannerTitle: string;
  bannerDescription: string;
  buttonTitle: string;
}

function BottomSheet({ type, messageType, buttonFn }: BottomSheetProps) {
  const [isInputsValid, setInputsValid] = useState(false);
  const { selectedCount } = useSelectedStore();

  const { title, bannerTitle, bannerDescription, buttonTitle } = messageHandler(messageType);

  const checkInputsValid = (inputsValid: boolean) => {
    setInputsValid(inputsValid);
  };

  return (
    <Card>
      <Nav>
        <BackButton src={ICONS.backButton} />
        <TitleText>{title}</TitleText>
      </Nav>
      <Viewport>
        <DisplayBanner>
          <BannerTitle>{bannerTitle}</BannerTitle>
          <BannerDescription>{bannerDescription}</BannerDescription>
        </DisplayBanner>
        <Attach>
          {type === 'make' && <MakeCushion checkValidFn={checkInputsValid}></MakeCushion>}
          {type === 'edit' && <EditProfile checkValidFn={checkInputsValid}></EditProfile>}
        </Attach>
      </Viewport>
      <ButtonContainer>
        <Button
          type="cta"
          size="lg"
          disabled={
            type === 'edit'
              ? !isInputsValid
              : !isInputsValid || selectedCount > 1 || selectedCount === 0
          }
          clickFn={buttonFn}>
          {buttonTitle}
        </Button>
      </ButtonContainer>
    </Card>
  );
}

const messageHandler = (messageType: string): IMessage => {
  if (messageType === 'makeCushion')
    return {
      title: MESSAGES.bottomSheet.title.makeCushion,
      bannerTitle: MESSAGES.bottomSheet.bannerTitle.makeCushion,
      bannerDescription: MESSAGES.bottomSheet.bannerDescription.makeCushion,
      buttonTitle: MESSAGES.bottomSheet.buttonTitle.makeCushion,
    };
  if (messageType === 'editProfile')
    return {
      title: MESSAGES.bottomSheet.title.editProfile,
      bannerTitle: MESSAGES.bottomSheet.bannerTitle.editProfile,
      bannerDescription: MESSAGES.bottomSheet.bannerDescription.editProfile,
      buttonTitle: MESSAGES.bottomSheet.buttonTitle.edit,
    };

  return {
    title: MESSAGES.bottomSheet.title.editUser,
    bannerTitle: MESSAGES.bottomSheet.bannerTitle.makeCushion,
    bannerDescription: MESSAGES.bottomSheet.bannerDescription.makeCushion,
    buttonTitle: MESSAGES.bottomSheet.buttonTitle.edit,
  };
};

export default BottomSheet;
