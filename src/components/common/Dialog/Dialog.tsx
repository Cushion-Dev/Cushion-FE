import {
  DialogContainer,
  WrapText,
  TitleText,
  SubText,
  ButtonContainer,
  Button,
} from '../../../styles/common/Dialog/Dialog';
import Divider from '../Divider';

interface IDialogProps {
  variant?: ButtonVariant;
  titleText: string;
  subText: string;
  cancelText: string;
  eventText: string;
}

const Dialog = ({
  variant,
  titleText,
  subText,
  cancelText,
  eventText,
}: IDialogProps) => {
  return (
    <DialogContainer>
      <WrapText>
        <TitleText>{titleText}</TitleText>
        <SubText>{subText}</SubText>
      </WrapText>
      <Divider variant="dialog" />
      <ButtonContainer>
        <Button>{cancelText}</Button>
        <Button $variant={variant}>{eventText}</Button>
      </ButtonContainer>
    </DialogContainer>
  );
};

export default Dialog;
