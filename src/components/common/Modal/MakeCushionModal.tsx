import { MESSAGES } from '../../../constants/messages';
import BottomSheet from '../BottomSheet/BottomSheet';

function MakeCushion() {
  return (
    <BottomSheet
      title={MESSAGES.bottomSheet.title.makeCushion}
      bannerTitle={MESSAGES.bottomSheet.bannerTitle.makeCushion}
      bannerDescription={MESSAGES.bottomSheet.bannerDescription.makeCushion}
      buttonText={MESSAGES.bottomSheet.buttonTitle.makeCushion}
      type='make'
    ></BottomSheet>
  );
}

export default MakeCushion;
