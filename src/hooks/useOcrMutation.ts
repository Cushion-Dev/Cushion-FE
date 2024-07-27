import { useMutation } from '@tanstack/react-query';
import { API } from '../services/api';
import useExtractText from './useExtractTextMutation';
import useLoadingModalStore from '../stores/Modal/useLoadingModalStore';
import {
  useOcrLoading,
  usePersonalityLoading,
} from '../stores/Modal/useModalStore';

interface Ocr {
  roomId?: number;
  formData: FormData;
}

const postImages = async (formData: FormData) => {
  return await API.post(`/ocr`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

const useOcrMutation = (roomId: number) => {
  const { mutate: postExtractText } = useExtractText(roomId);
  const { setMessage } = useLoadingModalStore();
  const { close: closeOcrLoading } = useOcrLoading();
  const { open: openPersonalityLoading } = usePersonalityLoading();

  return useMutation({
    mutationFn: (data: Ocr) => postImages(data.formData),
    onSuccess: (response) => {
      setMessage('상대방 성향을 파악하고 있어요');
      openPersonalityLoading();
      closeOcrLoading();
      const extractText = response.data;
      postExtractText({ conversation: extractText, roomId: roomId });
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useOcrMutation;
