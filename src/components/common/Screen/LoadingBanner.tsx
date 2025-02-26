import styled from 'styled-components';
import { useState, useEffect } from 'react';

import { TYPO } from '../../../styles/typo';
import { semantic } from '../../../styles/semantic';
import {
  LOADING_IMAGES,
  LOADING_MESSAGES,
} from '../../../constants/loaindgArray';

const LoadingBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % LOADING_IMAGES.length);
    }, 800);

    return () => clearInterval(interval);
  }, [LOADING_IMAGES.length]);

  return (
    <LoadingContainer>
      <LoadingImage src={LOADING_IMAGES[currentIndex]} />
      <LoadingText>{LOADING_MESSAGES[currentIndex]}</LoadingText>
    </LoadingContainer>
  );
};

export default LoadingBanner;

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
