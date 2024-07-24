import { useState } from 'react';

import { semantic } from '../../../styles/semantic';
import { ReactComponent as UnCheckedBoxIcon } from '../../../../public/assets/icon/listItem/checkbox-blank-line.svg';
import { ReactComponent as CheckedBoxIcon } from '../../../../public/assets/icon/listItem/checkbox-fill.svg';

import { CheckBoxWrapper } from '../../../styles/common/ListItem/CheckIcon';
import ListContent from './ListContent';
import { ListItemContainer } from '../../../styles/common/ListItem/ListItem';

interface ListItemProps {
  userName: string;
  relation: string;
  timeStamp: string;
  content: string;
  isEditing?: boolean;
  disabled?: boolean;
}

function ListItem({
  userName,
  relation,
  timeStamp,
  content,
  isEditing = false,
  disabled = false,
}: ListItemProps) {
  const [isChecked, setIsChecked] = useState(false);
  const handleClickItem = () => {
    if (isEditing && !disabled) setIsChecked((prev) => !prev);
  };

  return (
    <ListItemContainer
      disabled={disabled}
      isChecked={isChecked}
      isEditing={isEditing}
      onClick={handleClickItem}
    >
      <CheckBoxWrapper isEditing={isEditing}>
        {isChecked ? (
          <CheckedBoxIcon
            fill={iconColorHandler(disabled, 'checked')}
          ></CheckedBoxIcon>
        ) : (
          <UnCheckedBoxIcon
            fill={iconColorHandler(disabled, 'blank')}
          ></UnCheckedBoxIcon>
        )}
      </CheckBoxWrapper>
      <ListContent
        userName={userName}
        relation={relation}
        timeStamp={timeStamp}
        content={content}
      ></ListContent>
    </ListItemContainer>
  );
}

const iconColorHandler = (disabled: boolean, type: string) => {
  if (disabled) return semantic.light.object.transparent.disabled;
  if (!disabled && type === 'blank')
    return semantic.light.object.transparent.neutral;
  if (!disabled && type === 'checked') return semantic.light.accent.solid.hero;
};

export default ListItem;
