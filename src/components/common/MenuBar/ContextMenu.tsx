import Menu from './Menu';
import { ICONS } from '../../../styles/common/icons';
import {
  MenuContainer,
  Divider,
} from '../../../styles/common/MenuBar/ContextMenu';
import {
  useEditProfileModal,
  useEditUserModal,
} from '../../../stores/Modal/useModalStore';

interface IContextMenu {
  type?: 'global' | 'local';
}

const ContextMenu = ({ type }: IContextMenu) => {
  const { open: editProflieOpen } = useEditProfileModal();
  const { open: editUserOpen } = useEditUserModal();
  return (
    <MenuContainer>
      {type === 'global' ? (
        <>
          <Menu menuName='쿠션 삭제하기' iconURL={ICONS.menu.delete}></Menu>
          <Menu
            clickFn={editProflieOpen}
            menuName='내 정보 수정'
            iconURL={ICONS.menu.edit}
          ></Menu>
          <Divider src={ICONS.menu.divider} />
          <Menu
            menuName='이용약관 확인'
            iconURL={ICONS.menu.externalLink}
          ></Menu>
          <Menu menuName='로그아웃' iconURL={ICONS.menu.logout}></Menu>
          <Menu
            menuName='회원 탈퇴'
            iconURL={ICONS.menu.quit}
            variant='withdraw'
          ></Menu>
        </>
      ) : (
        <>
          <Menu
            clickFn={editUserOpen}
            menuName='상대방 정보 수정'
            iconURL={ICONS.menu.edit}
          ></Menu>
          <Divider src={ICONS.menu.divider} />
          <Menu
            menuName='운영정책 확인'
            iconURL={ICONS.menu.externalLink}
          ></Menu>
        </>
      )}
    </MenuContainer>
  );
};

export default ContextMenu;
