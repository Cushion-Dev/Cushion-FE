import Menu from './Menu';
import { ICONS } from '../../../styles/common/icons';
import {
  MenuContainer,
  Divider,
} from '../../../styles/common/MenuBar/ContextMenu';
import {
  useEditProfileModal,
  useEditUserModal,
  useLogoutDialog,
  useWithdrawDialog,
} from '../../../stores/Modal/useModalStore';

interface IContextMenu {
  type?: 'global' | 'local';
  onClose: () => void;
  onClickMenu?: () => void;
}

const ContextMenu = ({ type, onClose, onClickMenu }: IContextMenu) => {
  const { open: editUserOpen } = useEditUserModal();
  const { open: editProflieOpen } = useEditProfileModal();
  const { open: OpenLogoutDialog } = useLogoutDialog();
  const { open: OpenWithdrawDialog } = useWithdrawDialog();

  return (
    <MenuContainer>
      {type === 'global' ? (
        <>
          <Menu
            menuName='쿠션 삭제하기'
            iconURL={ICONS.menu.delete}
            onClose={onClose}
            clickFn={onClickMenu}
          />
          <Menu
            onClose={onClose}
            clickFn={editProflieOpen}
            menuName='내 정보 수정'
            iconURL={ICONS.menu.edit}
          />
          <Divider src={ICONS.menu.divider} />
          <Menu
            onClose={onClose}
            menuName='이용약관 확인'
            iconURL={ICONS.menu.externalLink}
          />
          <Menu
            menuName='로그아웃'
            iconURL={ICONS.menu.logout}
            onClose={onClose}
            clickFn={OpenLogoutDialog}
          />
          <Menu
            onClose={onClose}
            menuName='회원 탈퇴'
            iconURL={ICONS.menu.quit}
            variant='withdraw'
            clickFn={OpenWithdrawDialog}
          />
        </>
      ) : (
        <>
          <Menu
            onClose={onClose}
            clickFn={editUserOpen}
            menuName='상대방 정보 수정'
            iconURL={ICONS.menu.edit}
          />
          <Divider src={ICONS.menu.divider} />
          <Menu
            onClose={onClose}
            menuName='운영정책 확인'
            iconURL={ICONS.menu.externalLink}
          />
        </>
      )}
    </MenuContainer>
  );
};

export default ContextMenu;
