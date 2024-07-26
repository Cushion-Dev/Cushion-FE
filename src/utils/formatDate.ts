export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();

  const timeDiff = now.getTime() - date.getTime();
  const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  if (dayDiff === 0) {
    return '오늘';
  } else if (dayDiff === 1) {
    return '어제';
  } else if (dayDiff <= 7) {
    return `${dayDiff}일 전`;
  } else if (dayDiff <= 14) {
    return '일주일 전';
  } else if (dayDiff <= 21) {
    return '2주 전';
  } else if (dayDiff <= 28) {
    return '3주 전';
  } else if (dayDiff < 60) {
    return '1달 전';
  } else {
    return '1달+';
  }
};
