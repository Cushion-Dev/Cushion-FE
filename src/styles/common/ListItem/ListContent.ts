import { styled } from 'styled-components';
import { TYPO } from '../../typo';
import { semantic } from '../../semantic';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ListHeader = styled.div`
  width: 100%;
  display: inline-flex;
  align-items: center;
  gap: 15px;
`;

export const ListTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 9;
`;

export const ListItemTitle = styled.h2`
  ${TYPO.title2}
`;

export const ListContentText = styled.p`
  color: ${semantic.light.object.solid.normal};
  ${TYPO.body2};
`;

export const TimeStamp = styled.span`
  color: ${semantic.light.object.transparent.assistive};
  ${TYPO.label3};
`;
