import { Dialog, LoginDialog } from '../components';
import { MESSAGES } from '../constants/messages';

const App = () => {
  return (
    <>
      <Dialog
        variant="cta"
        titleText={MESSAGES.dialog.alert.title}
        subText={MESSAGES.dialog.alert.sub}
        cancelText={MESSAGES.dialog.alert.no}
        eventText={MESSAGES.dialog.alert.yes}
      />
      <Dialog
        variant="cta"
        titleText={MESSAGES.dialog.ocr.title}
        subText={MESSAGES.dialog.ocr.sub}
        cancelText={MESSAGES.dialog.ocr.cancel}
        eventText={MESSAGES.dialog.ocr.attach}
      />
      <Dialog
        variant="cta"
        titleText={MESSAGES.dialog.logout.title}
        subText={MESSAGES.dialog.logout.sub}
        cancelText={MESSAGES.dialog.logout.cancel}
        eventText={MESSAGES.dialog.logout.logout}
      />
      <Dialog
        variant="negative"
        titleText={MESSAGES.dialog.withdraw.title}
        subText={MESSAGES.dialog.withdraw.sub}
        cancelText={MESSAGES.dialog.withdraw.cancel}
        eventText={MESSAGES.dialog.withdraw.withdraw}
      />
      <Dialog
        variant="negative"
        titleText={MESSAGES.dialog.delete.title}
        subText={MESSAGES.dialog.delete.sub}
        cancelText={MESSAGES.dialog.delete.cancel}
        eventText={MESSAGES.dialog.delete.delete}
      />
      <Dialog
        variant="cta"
        titleText={MESSAGES.dialog.back.title}
        subText={MESSAGES.dialog.back.sub}
        cancelText={MESSAGES.dialog.back.no}
        eventText={MESSAGES.dialog.back.yes}
      />
      <LoginDialog />
    </>
  );
};

export default App;
