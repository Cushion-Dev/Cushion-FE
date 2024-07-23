import FormInput from '../Form/FormInput';

function EditProfile() {
  return (
    <>
      <FormInput
        label='소속'
        placeholder='IT 기업의 AI 관련 팀'
        extraText='에서'
        helperText='최대 입력 가능한 글자수는 15자 까지에요'
        maxLetterCount={15}
      ></FormInput>
      <FormInput
        label='직무'
        placeholder='서비스 기획'
        extraText='을(를) 하는'
        helperText='최대 입력 가능한 글자수는 15자 까지에요'
        maxLetterCount={15}
      ></FormInput>
      <FormInput
        label='이름'
        placeholder='홍길동'
        extraText='(이)라고 해요'
        helperText='최대 입력 가능한 글자수는 15자 까지에요'
        maxLetterCount={15}
      ></FormInput>
    </>
  );
}

export default EditProfile;
