import { useQuery } from '@tanstack/react-query';
import { API } from '../services/api';

interface RoomData {
  partnerName: string;
  relationship: string;
  messages: [
    {
      messageId: number;
      senderType: 'BOT' | 'USER';
      content: string;
    },
  ];
  createdAt: string;
  lastUsedAt: string;
}

// const getChatRoom = async (roomId: string): Promise<RoomData> => {
//   const result = await API.get<RoomData>(`/chat/rooms/${roomId}`);
//   return result.data;
// };

const useChatRoomQuery = (roomId: string | undefined) => {
  const { data, isError, isSuccess } = useQuery({
    queryKey: ['room', roomId],
    queryFn: async () => {
      const response = await API.get<RoomData>(`/chat/rooms/${roomId}`);
      console.log(response);
      const accessToken = response.headers['access-token'];
      if (accessToken) {
        console.log('New Access Token:', accessToken);
        localStorage.setItem('accessToken', accessToken);
      }
      return response.data;
    },
    enabled: !!roomId,
  });
  return { data, isError, isSuccess };
};

export default useChatRoomQuery;
