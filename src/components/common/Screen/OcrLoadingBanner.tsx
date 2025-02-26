import styled from 'styled-components';

import { TYPO } from '../../../styles/typo';
import { semantic } from '../../../styles/semantic';

import { ICONS } from '../../../styles/common/icons';
import useLoadingModalStore from '../../../stores/Modal/useLoadingModalStore';
import { useEffect, useState } from 'react';

const OcrLoadingBanner = () => {
  const { message } = useLoadingModalStore();

  const [animatedMessage, setAnimatedMessage] = useState(message);
  const [dotIndex, setDotIndex] = useState(0);
  const dotSequence = [3, 2, 1, 2, 3];

  useEffect(() => {
    const interval = setInterval(() => {
      setDotIndex((prevIndex) => (prevIndex + 1) % dotSequence.length);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setAnimatedMessage(`${message}${'.'.repeat(dotSequence[dotIndex])}`);
  }, [dotIndex, message]);

  return (
    <LoadingContainer>
      <LoadingImage src={ICONS.loading.loading6} />
      <LoadingText>{animatedMessage}</LoadingText>
    </LoadingContainer>
  );
};

export default OcrLoadingBanner;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;

  gap: 3rem;
`;

const LoadingImage = styled.img`
  width: 10rem;
  height: 10rem;
`;

const LoadingText = styled.span`
  align-self: stretch;
  text-align: center;

  ${TYPO.title3}
  color: ${semantic.light.object.transparent.neutral};
`;
