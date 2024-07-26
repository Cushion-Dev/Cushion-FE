import { useState } from 'react';
import styled from 'styled-components';
import useModal from '../hooks/useModal';
import { semantic } from '../styles/semantic';
import {
  AppScreen,
  Attach,
  ButtonContainer,
  Container,
  LoginDialog,
  Navbar,
} from '../components';
import { TYPO } from '../styles/typo';
import Callout from '../components/common/Dialog/Callout';
import Button from '../components/common/Button/Button';
import Modal from '../components/common/Modal/Modal';
import Viewport from '../components/layout/Viewport';
import EditProfile from '../components/common/BottomSheet/EditProfile';

function UserSetting() {
  const { isOpen, openModal, closeModal } = useModal();
  const [isInputsValid, setInputsValid] = useState(false);

  const { name } = useNameStore();
  const { affiliation } = useAffiliationStore();
  const { job } = useJobStore();

  const handleClickButton = () => {
    openModal();
  };

  const checkInputsValid = (inputsValid: boolean) => {
    setInputsValid(inputsValid);
  };

  return (
    <Container>
      <AppScreen>
        <UsreSettingContainer>
          <Navbar type="nomeat" title="사용자 정보 입력"></Navbar>
          <Viewport>
            <DisplayBanner>
              <BannerTitle>
                우선, 쿠션을 사용하는
                <br />
                사용자님에 대해서 알려주세요!
              </BannerTitle>
              <BannerDescription>
                아래의 세 가지 항목을 모두 입력해주세요.
              </BannerDescription>
            </DisplayBanner>
            <Attach>
              <EditProfile checkValidFn={checkInputsValid}></EditProfile>
            </Attach>
            <Callout text="사용자님의 정보는 쿠션 만들기에만 환용되니, 안심하고 입력해 주세요."></Callout>
          </Viewport>
          <ButtonContainer>
            <Button
              type="cta"
              size="lg"
              clickFn={handleClickButton}
              disabled={!isInputsValid}>
              정보 입력하기
            </Button>
          </ButtonContainer>
          {isOpen && (
            <Modal type="modal" onClose={closeModal}>
              <LoginDialog />
            </Modal>
          )}
        </UsreSettingContainer>
      </AppScreen>
    </Container>
  );
}

const UsreSettingContainer = styled.div`
  display: flex;
  max-width: 32.5rem;
  padding: 0;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
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

export default UserSetting;
