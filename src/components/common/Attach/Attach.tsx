import { ReactNode } from 'react';

import { IconWrapper } from './Icon';
import { ICONS } from '../../../styles/common/icons';
import {
  AttachContainer,
  AttachIcon,
} from '../../../styles/common/Attach/Attach';

interface AttachProps {
  children: ReactNode;
}

function Attach({ children }: AttachProps) {
  return (
    <AttachContainer>
      <IconWrapper>
        <AttachIcon src={ICONS.attach} />
      </IconWrapper>
      {children}
    </AttachContainer>
  );
}

export default Attach;
