import { MESSAGES } from '../../../constants/messages';
import BottomSheet from '../BottomSheet/BottomSheet';

function EditUser() {
  return (
    <BottomSheet
      title={MESSAGES.bottomSheet.title.editUser}
      bannerTitle={MESSAGES.bottomSheet.bannerTitle.makeCushion}
      bannerDescription={MESSAGES.bottomSheet.bannerDescription.makeCushion}
      buttonText={MESSAGES.bottomSheet.buttonTitle.edit}
      type='make'
    ></BottomSheet>
  );
}

export default EditUser;
