import { ToastContainer, BodyText } from '../../styles/common/Toast';

interface IToastProps {
  bodyText: string;
}

const Toast = ({ bodyText }: IToastProps) => {
  return (
    <ToastContainer>
      <BodyText>{bodyText}</BodyText>
    </ToastContainer>
  );
};

export default Toast;
