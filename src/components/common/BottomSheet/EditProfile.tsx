import { useEffect } from 'react';
import { useJobStore, useAffiliationStore, useNameStore } from '../../../stores/useTextFieldStore';
import FormInput from '../Form/FormInput';

interface EditProfileProps {
  checkValidFn?: (value: boolean) => void;
  disabled?: boolean;
  readonly?: boolean;
}

const EditProfile = ({ checkValidFn, disabled, readonly }: EditProfileProps) => {
  const { affiliation, isAffiliationValid, setAffiliation, setAffiliationValid } =
    useAffiliationStore();
  const { job, isJobValid, setJob, setJobValid } = useJobStore();
  const { name, isNameValid, setName, setNameValid } = useNameStore();

  const currentAffiliation = localStorage.getItem('affiliation');
  const currentJob = localStorage.getItem('job');
  const currentName = localStorage.getItem('name');

  const resetInputField = () => {
    setAffiliation('');
    setJob('');
    setName('');
  };

  useEffect(() => {
    resetInputField();
  }, [currentAffiliation, currentJob, currentName]);

  useEffect(() => {
    setAffiliationValid();
    setJobValid();
    setNameValid();
  }, [affiliation, job, name]);

  useEffect(() => {
    if (checkValidFn) checkValidFn(isAffiliationValid && isJobValid && isNameValid);
  }, [isAffiliationValid, isJobValid, isNameValid]);

  return (
    <>
      <FormInput
        label="소속"
        placeholder="IT 기업의 AI 관련 팀"
        extraText="에서"
        helperText="최대 입력 가능한 글자수는 15자까지예요"
        maxLetterCount={15}
        changeFn={setAffiliation}
        disabled={disabled}
        readonly={readonly}
        type={affiliation}
      />
      <FormInput
        label="직무"
        placeholder="서비스 기획"
        extraText="을(를) 하는"
        helperText="최대 입력 가능한 글자수는 15자까지예요"
        maxLetterCount={15}
        changeFn={setJob}
        disabled={disabled}
        readonly={readonly}
        type={job}
      />
      <FormInput
        label="이름"
        placeholder="홍길동"
        extraText="(이)라고 해요"
        helperText="최대 입력 가능한 글자수는 15자까지예요"
        maxLetterCount={15}
        changeFn={setName}
        disabled={disabled}
        readonly={readonly}
        type={name}
      />
    </>
  );
};

export default EditProfile;
