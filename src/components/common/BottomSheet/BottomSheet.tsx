import styled from 'styled-components';
import { semantic } from '../../../styles/semantic';
import { TYPO } from '../../../styles/typo';
import Attach from '../Attach/Attach';

import Button from '../Button/Button';
import MakeChushion from './MakeChushion';
import EditProfile from './EditProfile';
import Viewport from '../../layout/Viewport';
import ButtonContainer from '../../layout/ButtonContainer';
import { BackButton, TitleText } from '../../../styles/common/Navbar';
import { ICONS } from '../../../styles/common/icons';
import { useEffect, useState } from 'react';

interface BottomSheetProps {
  title: string;
  bannerTitle: string;
  bannerDescription: string;
  buttonText: string;
  type: string;
}

function BottomSheet({
  title,
  bannerTitle,
  bannerDescription,
  buttonText,
  type,
}: BottomSheetProps) {
  const [name, setName] = useState('');
  const [isClick, setIsClick] = useState(false);
  const [isValid, setIsValid] = useState(false);

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
          {buttonText}
        </Button>
      </ButtonContainer>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  width: 32.5rem;
  height: 48.75rem;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 1.5rem 1.5rem 0 0;
  background: linear-gradient(180deg, #fff 0%, #fafaf7 100%);
  box-shadow:
    0px 3.2px 8px 0px rgba(12, 10, 9, 0.13),
    0px 10px 22.3px 0px rgba(12, 10, 9, 0.09),
    0px 22px 43px 0px rgba(238, 181, 152, 0.09),
    0px 0px 10.6px 0px rgba(12, 10, 9, 0.11);
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  width: 32.5rem;
  height: 3.75rem;

  gap: 1rem;
  padding: 1rem;

  opacity: 1;
  border-bottom: 1px solid ${semantic.light.border.transparent.alternative};
`;

const DisplayBanner = styled.div`
  display: flex;
  padding: 1.5rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  align-self: stretch;
`;

const BannerTitle = styled.p`
  align-self: stretch;

  color: ${semantic.light.object.solid.hero};
  text-align: center;

  ${TYPO.display1}
`;

const BannerDescription = styled.p`
  align-self: stretch;
  color: ${semantic.light.object.transparent.alternative};
  text-align: center;

  ${TYPO.title1}
`;

export default BottomSheet;
