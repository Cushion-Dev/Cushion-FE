import { styled } from 'styled-components';
import { semantic } from '../../../styles/semantic';
import { TYPO } from '../../../styles/typo';
import { ReactComponent as CushionIcon } from '../../../../public/assets/icon/listItem/cushionVectorAsset.svg';

interface ListItemProps {
  userName: string;
  relation: string;
  timeStamp: string;
  content: string;
}

function ListItem({ userName, relation, timeStamp, content }: ListItemProps) {
  return (
    <ListItemContainer>
      <ListHeader>
        <ListTitleWrapper>
          <CushionIcon></CushionIcon>
          <ListItemTitle>
            {userName}({relation})
          </ListItemTitle>
        </ListTitleWrapper>
        <TimeStamp>{timeStamp}</TimeStamp>
      </ListHeader>
      <ListMain>{content}</ListMain>
    </ListItemContainer>
  );
}

const ListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 485px;
  padding: 16px 20px;
  border-radius: 12px;
  border: 1px solid ${semantic.light.border.transparent.neutral};
  background: ${semantic.light.bg.solid.light};
  box-shadow: 0px 0px 5.599999904632568px rgba(12, 10, 9, 0.06);
`;

const ListHeader = styled.div`
  width: 100%;
  display: inline-flex;
  align-items: center;
  gap: 15px;
`;

const ListTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 9;
`;

const ListItemTitle = styled.h2`
  ${TYPO.title2}
`;

const ListMain = styled.p`
  ${TYPO.body2}
`;

const TimeStamp = styled.span`
  color: ${semantic.light.object.transparent.assistive};
  ${TYPO.label3};
`;

export default ListItem;
