export const MESSAGES = {
  dialog: {
    alert: {
      title: '정말 뒤로 돌아가시겠어요?',
      sub: `지금까지 작성한 내용들이 전부 사라지고,\n되돌릴 수 없어요.`,
      no: '아니오',
      yes: '네',
    },
    ocr: {
      title: '상대방 맞춤 쿠션',
      sub: `타 메신저에서 상대방과 나눈\n대화 내용 캡처 이미지를 첨부해 주시면\n상대방 성향에 딱 맞춘 푹신한 쿠션을 만들 수 있어요!`,
      cancel: '취소하기',
      attach: '이미지 첨부하기',
    },
    login: {
      accent: '쿠션 만들기',
      title: `를 시작하려면,\n로그인이 필요해요.`,
      text: (symbol: string) => `${symbol}로 시작하기`,
    },
    back: {
      title: '정말 뒤로 돌아가시겠어요?',
      sub: `지금까지 작성한 내용들이 전부 사라지고,\n되돌릴 수 없어요.`,
      no: '아니오',
      yes: '네',
    },
    logout: {
      title: '정말 로그아웃 하시겠어요?',
      sub: `만든 쿠션 목록들을 확인하거나,\n새롭게 쿠션을 만들려면 다시 로그인이 필요해요.`,
      cancel: '취소하기',
      logout: '로그아웃',
    },
    delete: {
      title: '정말 삭제하시겠어요?',
      sub: `지금까지 만든 쿠션들이 모두 사라져요.\n사라진 쿠션은 다시 찾아올 수 없어요.`,
      cancel: '삭제 취소',
      delete: '삭제하기',
    },
    withdraw: {
      title: '정말 회원탈퇴 하시겠어요?',
      sub: `사용자님의 회원 정보가 삭제되고,\n모든 쿠션 내역들이 영구적으로 사라져요.\n돌이킬 수 없어요.`,
      cancel: '취소하기',
      withdraw: '탈퇴하기',
    },
  },

  textarea: {
    placeholder: '부드럽게 바꾸고 싶은 메시지 내용을 입력해 주세요...',
  },

  speechExample: {
    user: 'OO님, 아까 보내 주신 내용을 문서화하려는데요. 사용할 수 없을 정도로 엉망이네요. 급하니까 당장 다시 해서 보내 주세요.',
    system: '... 네 알겠습니다.',
    emotion: '😠 굉장히 무례함을 느끼는 중',
  },

  bottomSheet: {
    bannerTitle: {
      makeCushion: `푹신해진 쿠션을\r\n전달받는 상대방은 누구인가요?`,
      editProfile: '내 정보를 수정해보세요',
    },
    bannerDescription: {
      makeCushion: '아래의 항목을 모두 입력 및 선택해주세요.',
      editProfile: '항목을 수정하고, 수정 완료를 눌러 저장하세요.',
    },
    title: {
      makeCushion: '쿠션 만들기',
      editProfile: '내 정보 수정하기',
      editUser: '상대방 정보 수정하기',
    },
    buttonTitle: {
      makeCushion: '쿠션 만들기',
      edit: '수정 완료하기',
    },
  },
};
