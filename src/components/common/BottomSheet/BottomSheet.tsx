import { useEffect, useState } from 'react';

import { ICONS } from '../../../styles/common/icons';
import { MESSAGES } from '../../../constants/messages';

import Attach from '../Attach/Attach';
import Button from '../Button/Button';
import MakeChushion from './MakeChushion';
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

interface BottomSheetProps {
  messageType: string;
  type: string;
}

interface IMessage {
  title: string;
  bannerTitle: string;
  bannerDescription: string;
  buttonTitle: string;
}

function BottomSheet({ type, messageType }: BottomSheetProps) {
  const [name, setName] = useState('');
  const [isClick, setIsClick] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const { title, bannerTitle, bannerDescription, buttonTitle } =
    messageHandler(messageType);

  const checkIsClick = (isClick: boolean) => {
    setIsClick(isClick);
  };

  const getName = (name: string) => {
    setName(name);
  };
  useEffect(() => {
    if (name.length > 0 && name.length < 15 && isClick) setIsValid(true);
    else setIsValid(false);
  }, [name, isClick]);

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
          {type === 'make' && (
            <MakeChushion checkFn={checkIsClick} getFn={getName}></MakeChushion>
          )}
          {type === 'edit' && <EditProfile></EditProfile>}
        </Attach>
      </Viewport>
      <ButtonContainer>
        <Button type='cta' size='lg' disabled={!isValid}>
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
