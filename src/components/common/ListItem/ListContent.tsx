import { ReactComponent as CushionIcon } from '../../../../public/assets/icon/listItem/cushionVectorAsset.svg';
import {
  ContentWrapper,
  ListContentText,
  ListHeader,
  ListItemTitle,
  ListTitleWrapper,
  TimeStamp,
} from '../../../styles/common/ListItem/ListContent';

interface ListContentProps {
  userName: string;
  relation: string;
  timeStamp: string;
  content: string;
}

function ListContent({
  userName,
  relation,
  timeStamp,
  content,
}: ListContentProps) {
  return (
    <ContentWrapper>
      <ListHeader>
        <ListTitleWrapper>
          <CushionIcon></CushionIcon>
          <ListItemTitle>
            {userName}({relation})
          </ListItemTitle>
        </ListTitleWrapper>
        <TimeStamp>{timeStamp}</TimeStamp>
      </ListHeader>
      <ListContentText>{content}</ListContentText>
    </ContentWrapper>
  );
}

export default ListContent;
