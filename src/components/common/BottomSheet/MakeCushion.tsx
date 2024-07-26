import { styled } from 'styled-components';
import FormInput from '../Form/FormInput';
import SelectButton from '../Button/SelectButton';
import { semantic } from '../../../styles/semantic';
import { TYPO } from '../../../styles/typo';
import { useNameStore } from '../../../stores/useTextFieldStore';
import { useEffect } from 'react';
import { usePartnerStore } from '../../../stores/usePartnerStore';

const relationArr = [
  '(조)부모',
  '형제/자매',
  '배우자',
  '자녀',
  '친구',
  '상사',
  '동료',
  '후배',
  '지인',
];

interface MakeCushionProps {
  checkValidFn: (value: boolean) => void;
}

function MakeCushion({ checkValidFn }: MakeCushionProps) {
  const { name, setName, isNameValid, setNameValid } = useNameStore();
  const { partnerName } = usePartnerStore();

  useEffect(() => {
    if (partnerName) {
      setName(partnerName);
    }
  }, []);

  useEffect(() => {
    setNameValid();
  }, [name]);

  useEffect(() => {
    checkValidFn(isNameValid);
  }, [isNameValid]);
  return (
    <>
      <FormInput
        label='이름'
        placeholder='홍길동'
        extraText='(이)라고 해요'
        helperText='최대 입력 가능한 글자수는 15자 까지에요'
        maxLetterCount={15}
        type={name}
        changeFn={setName}
        value={partnerName}
      ></FormInput>
      <CategoryContainer>
        <CategoryTitle>
          <CategoryLabel>관계</CategoryLabel>
          <CategoryDescription>1개 선택 가능</CategoryDescription>
        </CategoryTitle>
      </CategoryContainer>
      <CategoryButtonContainer>
        {relationArr.map((item, index) => (
          <SelectButton key={index} value={item}>
            {item}
          </SelectButton>
        ))}
      </CategoryButtonContainer>
    </>
  );
}

const CategoryContainer = styled.div`
  display: flex;
  padding: 0.5rem 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
`;

const CategoryTitle = styled.div`
  display: flex;
  padding: 0;
  align-items: center;
  gap: 0.75rem;
  align-self: stretch;
`;

const CategoryLabel = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: ${semantic.light.object.transparent.alternative};
  text-overflow: ellipsis;

  ${TYPO.label2}
`;

const CategoryDescription = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: ${semantic.light.object.transparent.assistive};
  text-overflow: ellipsis;

  ${TYPO.caption2}
`;

const CategoryButtonContainer = styled.div`
  display: flex;
  padding: 0;
  align-items: flex-start;
  align-content: flex-start;
  gap: 0.75rem 0.625rem;
  align-self: stretch;
  flex-wrap: wrap;
`;

export default MakeCushion;
