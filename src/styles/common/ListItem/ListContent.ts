import { styled } from 'styled-components';
import { TYPO } from '../../typo';
import { semantic } from '../../semantic';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ListHeader = styled.div`
  width: 100%;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
`;

export const ListTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  flex: 1 0 0;
`;

export const ListItemTitle = styled.h2`
  color: ${semantic.light.object.transparent.neutral};
  ${TYPO.title2}
`;

export const ListContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  align-self: stretch;
`;

export const ListContentText = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  align-self: stretch;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${semantic.light.object.solid.normal};
  ${TYPO.body2};
`;

export const TimeStamp = styled.span`
  color: ${semantic.light.object.transparent.assistive};
  text-align: right;
  ${TYPO.label3};
`;
