import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import {
  AppScreen,
  Attach,
  ButtonContainer,
  Container,
  Navbar,
  SpeechExample,
  Viewport,
  CTAButton,
  MainButton,
  DimmedScreen,
  LoginDialog,
} from '../components';
import { TYPO } from '../styles/typo';
import { semantic } from '../styles/semantic';
import { ONBOARDING } from '../constants/onboarding';
import useModal from '../hooks/useModal';

const Onboarding = () => {
  const navigate = useNavigate();
  const { isOpen, openModal, closeModal } = useModal();

  const handleMainButtonClick = () => navigate('/user-setting');

  const handleClickButton = () => openModal();

  const handleDimmedScreenClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    closeModal();
  };

  const handleLoginDialogClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <Container>
      <AppScreen>
        <Navbar type="onboarding" />
        <Viewport>
          <DisplayBanner>
            <TitleText>{ONBOARDING.title}</TitleText>
          </DisplayBanner>
          <Attach>
            <SpeechExample />
          </Attach>
          <DisplayBanner>
            <WrapSubText>
              <SubText>{ONBOARDING.sub}</SubText>
            </WrapSubText>
          </DisplayBanner>
        </Viewport>
        <ButtonContainer>
          <CTAButton onClick={handleClickButton} buttonText="로그인하기" />
          <MainButton
            buttonText="쿠션 사용하기"
            onClick={handleMainButtonClick}
          />
        </ButtonContainer>
      </AppScreen>
      {isOpen && (
        <DimmedScreen onClick={handleDimmedScreenClick}>
          <LoginDialog onClick={handleLoginDialogClick} />
        </DimmedScreen>
      )}
    </Container>
  );
};

export default Onboarding;

const DisplayBanner = styled.span`
  display: flex;
  align-self: stretch;
  align-items: center;
  justify-content: center;

  gap: 1rem;
  padding: 1.5rem 0rem;
`;

const TitleText = styled.span`
  flex: 1 0 0;
  text-align: center;

  ${TYPO.display1}
  color: ${semantic.light.object.solid.hero};
`;

const WrapSubText = styled.div`
  display: flex;
  justify-content: center;

  width: 16.5625rem;
  height: 3.5rem;

  text-align: center;
`;

const SubText = styled.span`
  width: 14.8125rem;
  text-align: center;

  ${TYPO.title2}
  color: ${semantic.light.object.solid.hero};
`;
