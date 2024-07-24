import { useEffect } from 'react';
import {
  useJobStore,
  useMemberStore,
  useNameStore,
} from '../../../stores/useTextFieldStore';
import FormInput from '../Form/FormInput';

interface EditProfileProps {
  checkValidFn?: (value: boolean) => void;
  disabled?: boolean;
  readonly?: boolean;
}

function EditProfile({ checkValidFn, disabled, readonly }: EditProfileProps) {
  const { member, isMemberValid, setMember, setMemberValid } = useMemberStore();
  const { job, isJobValid, setJob, setJobValid } = useJobStore();
  const { name, isNameValid, setName, setNameValid } = useNameStore();

  useEffect(() => {
    setMemberValid();
    setJobValid();
    setNameValid();
  }, [member, job, name]);

  useEffect(() => {
    if (checkValidFn) checkValidFn(isMemberValid && isJobValid && isNameValid);
  }, [isMemberValid, isJobValid, isNameValid]);
  return (
    <>
      <FormInput
        label='소속'
        placeholder='IT 기업의 AI 관련 팀'
        extraText='에서'
        helperText='최대 입력 가능한 글자수는 15자 까지에요'
        maxLetterCount={15}
        changeFn={setMember}
        disabled={disabled}
        readonly={readonly}
        type={member}
      ></FormInput>
      <FormInput
        label='직무'
        placeholder='서비스 기획'
        extraText='을(를) 하는'
        helperText='최대 입력 가능한 글자수는 15자 까지에요'
        maxLetterCount={15}
        changeFn={setJob}
        disabled={disabled}
        readonly={readonly}
        type={job}
      ></FormInput>
      <FormInput
        label='이름'
        placeholder='홍길동'
        extraText='(이)라고 해요'
        helperText='최대 입력 가능한 글자수는 15자 까지에요'
        maxLetterCount={15}
        changeFn={setName}
        disabled={disabled}
        readonly={readonly}
        type={name}
      ></FormInput>
    </>
  );
}

export default EditProfile;
