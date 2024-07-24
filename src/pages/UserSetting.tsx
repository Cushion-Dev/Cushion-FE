import styled from 'styled-components';
import { useState, useEffect } from 'react';
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
import FormInput from '../components/common/Form/FormInput';
import Modal from '../components/common/Modal/Modal';
import Viewport from '../components/layout/Viewport';

function UserSetting() {
  const [member, setMember] = useState('');
  const [job, setJob] = useState('');
  const [name, setName] = useState('');
  const [isValid, setIsValid] = useState(false);
  const { isOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    const memberIsValid = member.length > 0 && member.length < 15;
    const jobIsValid = job.length > 0 && job.length < 15;
    const nameIsValid = name.length > 0 && name.length < 15;
    if (memberIsValid && jobIsValid && nameIsValid) setIsValid(true);
    else setIsValid(false);
  }, [member, job, name]);

  const getMember = (member: string) => {
    setMember(member);
  };
  const getJob = (job: string) => {
    setJob(job);
  };
  const getName = (name: string) => {
    setName(name);
  };

  const handleClickButton = () => {
    openModal();
  };

  return (
    <Container>
      <AppScreen>
        <UsreSettingContainer>
          <Navbar type='nomeat' title='사용자 정보 입력'></Navbar>
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
              <FormInput
                label='소속'
                placeholder='IT 기업의 AI 관련 팀'
                extraText='에서'
                helperText='최대 입력 가능한 글자수는 15자 까지에요'
                maxLetterCount={15}
                getFn={getMember}
              ></FormInput>
              <FormInput
                label='직무'
                placeholder='서비스 기획'
                extraText='을(를) 하는'
                helperText='최대 입력 가능한 글자수는 15자 까지에요'
                maxLetterCount={15}
                getFn={getJob}
              ></FormInput>
              <FormInput
                label='이름'
                placeholder='홍길동'
                extraText='(이)라고 해요'
                helperText='최대 입력 가능한 글자수는 15자 까지에요'
                maxLetterCount={15}
                getFn={getName}
              ></FormInput>
            </Attach>
            <Callout text='사용자님의 정보는 쿠션 만들기에만 환용되니, 안심하고 입력해 주세요.'></Callout>
          </Viewport>
          <ButtonContainer>
            <Button
              type='cta'
              disabled={!isValid}
              size='lg'
              clickFn={handleClickButton}
            >
              정보 입력하기
            </Button>
          </ButtonContainer>
          {isOpen && (
            <Modal type='modal' onClose={closeModal}>
              <LoginDialog></LoginDialog>
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
