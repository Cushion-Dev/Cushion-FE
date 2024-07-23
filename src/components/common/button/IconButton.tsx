import { semantic } from '../../../styles/semantic';
import { ReactComponent as BackIcon } from '../../../../public/assets/icon/arrow-left-line.svg';

import IconInteraction from './interaction/IconInteraction';
import ButtonWrapper from './ButtonWrapper';

interface IconButtonProps {
  type: 'cta' | 'default';
  size: 'lg' | 'md' | 'sm';
  disabled?: boolean;
}

function IconButton({ type, size, disabled = false }: IconButtonProps) {
  const iconColor = colorHandler(type, disabled);
  const iconSize = sizeHandler(size);

  return (
    <ButtonWrapper disabled={disabled}>
      <IconInteraction disabled={disabled}></IconInteraction>
      <BackIcon fill={iconColor} width={iconSize} height={iconSize}></BackIcon>
    </ButtonWrapper>
  );
}

const colorHandler = (
  type: IconButtonProps['type'],
  disabled: IconButtonProps['disabled']
) => {
  if (disabled) return `${semantic.light.object.transparent.disabled}`;
  if (type === 'cta') return `${semantic.light.accent.solid.hero}`;
  if (type === 'default') return `${semantic.light.object.solid.normal}`;
};

const sizeHandler = (size: IconButtonProps['size']) => {
  switch (size) {
    case 'lg':
      return '32px';
    case 'md':
      return '24px';
    case 'sm':
      return '18px';
    default:
      return '18px';
  }
};

export default IconButton;
