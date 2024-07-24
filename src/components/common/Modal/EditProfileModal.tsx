import { MESSAGES } from '../../../constants/messages';
import BottomSheet from '../BottomSheet/BottomSheet';

function EditProfile() {
  return (
    <BottomSheet
      title={MESSAGES.bottomSheet.title.editProfile}
      bannerTitle={MESSAGES.bottomSheet.bannerTitle.editProfile}
      bannerDescription={MESSAGES.bottomSheet.bannerDescription.editProfile}
      buttonText={MESSAGES.bottomSheet.buttonTitle.edit}
      type='edit'
    ></BottomSheet>
  );
}

export default EditProfile;
