const useTranslateName = () => {
  const translateToEng = (name: string) => {
    switch (name) {
      case '(조)부모':
        return 'PARENT';
      case '형제/자매':
        return 'SIBLING';
      case '배우자':
        return 'SPOUSE';
      case '자녀':
        return 'CHILDREN';
      case '친구':
        return 'FRIEND';
      case '상사':
        return 'BOSS';
      case '동료':
        return 'COLLEAGUE';
      case '후배':
        return 'JUNIOR';
      case '지인':
        return 'ACQUAINTANCE';
    }
  };

  return { translateToEng };
};

export default useTranslateName;
