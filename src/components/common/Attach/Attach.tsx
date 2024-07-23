import { ReactNode } from 'react';

import { ReactComponent as StickyIcon } from '../../../../public/assets/icon/attach/cushionVectorAsset.svg';

import { AttachContainer } from '../../../styles/common/Attach/Attach';
import { IconWrapper } from './Icon';

interface AttachProps {
  children: ReactNode;
}

function Attach({ children }: AttachProps) {
  return (
    <AttachContainer>
      <IconWrapper>
        <StickyIcon></StickyIcon>
      </IconWrapper>
      {children}
    </AttachContainer>
  );
}

export default Attach;
