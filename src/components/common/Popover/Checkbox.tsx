import { useState } from 'react';

import { ICONS } from '../../../styles/common/icons';
import {
  CheckboxContainer,
  CheckboxIcon,
  CheckboxCaption,
} from '../../../styles/common/Popover/Checkbox';

interface ICheckboxProps {
  caption: string;
}

const Checkbox = ({ caption }: ICheckboxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <CheckboxContainer>
      <CheckboxIcon
        onClick={handleCheckboxClick}
        src={isChecked ? ICONS.popover.fillCheck : ICONS.popover.blankCheck}
      />
      <CheckboxCaption>{caption}</CheckboxCaption>
    </CheckboxContainer>
  );
};

export default Checkbox;
