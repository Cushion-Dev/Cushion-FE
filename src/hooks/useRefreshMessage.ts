import { UseMutationResult, useMutation } from '@tanstack/react-query';
import axios from 'axios';

interface RefreshMessageParams {
  roomId: number;
  withPersonality: boolean;
}

const postRefreshMessage = async ({
  roomId,
  withPersonality,
}: RefreshMessageParams): Promise<any> => {
  const response = await axios.post('/change-style/retry', {
    roomId,
    withPersonality,
  });
  return response.data;
};

const useRefreshMessage = (): UseMutationResult<any, Error, RefreshMessageParams> => {
  return useMutation(postRefreshMessage, {
    onSuccess: (data: any) => {
      return data.message;
    },
    onError: (error) => {
      console.error('새로 고침을 할 수 없습니다.', error);
    },
  });
};

export default useRefreshMessage;
