import styled from 'styled-components';
import { semantic } from '../../../styles/semantic';
import Navbar from '../Navbar';
import { TYPO } from '../../../styles/typo';
import Attach from '../Attach/Attach';

import Button from '../Button/Button';
import MakeChushion from './MakeChushion';
import EditProfile from './EditProfile';

interface BottomSheetProps {
  title: string;
  bannerTitle: string;
  bannerDescription: string;
  buttonText: string;
  type: string;
}

function BottomSheet({
  title,
  bannerTitle,
  bannerDescription,
  buttonText,
  type,
}: BottomSheetProps) {
  return (
    <Card>
      <Navbar type='local' title={title}></Navbar>
      <ViewPort>
        <DisplayBanner>
          <BannerTitle>{bannerTitle}</BannerTitle>
          <BannerDescription>{bannerDescription}</BannerDescription>
        </DisplayBanner>
        <Attach>
          {type === 'make' && <MakeChushion></MakeChushion>}
          {type === 'edit' && <EditProfile></EditProfile>}
        </Attach>
      </ViewPort>
      <ButtonContainer>
        <Button type='cta' size='lg' clickFn={() => console.log('click')}>
          {buttonText}
        </Button>
      </ButtonContainer>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  width: 32.5rem;
  height: 48.75rem;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 1.5rem 1.5rem 0 0;
  background: linear-gradient(180deg, #fff 0%, #fafaf7 100%);
  box-shadow:
    0px 3.2px 8px 0px rgba(12, 10, 9, 0.13),
    0px 10px 22.3px 0px rgba(12, 10, 9, 0.09),
    0px 22px 43px 0px rgba(238, 181, 152, 0.09),
    0px 0px 10.6px 0px rgba(12, 10, 9, 0.11);
`;

const ViewPort = styled.div`
  display: flex;
  padding: 1.5rem 1rem;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  flex: 1 0 0;
  align-self: stretch;
`;

const DisplayBanner = styled.div`
  display: flex;
  padding: 1.5rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  align-self: stretch;
`;

const BannerTitle = styled.p`
  align-self: stretch;

  color: ${semantic.light.object.solid.hero};
  text-align: center;

  ${TYPO.display1}
`;

const BannerDescription = styled.p`
  align-self: stretch;
  color: ${semantic.light.object.transparent.alternative};
  text-align: center;

  ${TYPO.title1}
`;

const ButtonContainer = styled.div`
  display: flex;
  padding: 1.5rem 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  align-self: stretch;
  border-top: 1px solid ${semantic.light.border.transparent.alternative};
  background: ${semantic.light.bg.solid.normal};
`;

export default BottomSheet;
