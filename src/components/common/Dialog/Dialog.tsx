import {
  DialogContainer,
  WrapText,
  TitleText,
  SubText,
  WrapDivider,
  Divider,
  ButtonContainer,
  Button,
} from '../../../styles/common/Dialog/Dialog';

interface IDialogProps {
  variant?: ButtonVariant;
  titleText: string;
  subText: string;
  cancelText: string;
  eventText: string;
}

const Dialog = ({ variant, titleText, subText, cancelText, eventText }: IDialogProps) => {
  return (
    <DialogContainer>
      <WrapText>
        <TitleText>{titleText}</TitleText>
        <SubText>{subText}</SubText>
      </WrapText>
      <WrapDivider>
        <Divider />
      </WrapDivider>
      <ButtonContainer>
        <Button>{cancelText}</Button>
        <Button $variant={variant}>{eventText}</Button>
      </ButtonContainer>
    </DialogContainer>
  );
};

export default Dialog;
