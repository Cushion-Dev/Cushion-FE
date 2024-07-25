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

const getChatRoom = async (roomId: string): Promise<RoomData> => {
  const result = await API.get<RoomData>(`/chat/rooms/${roomId}`);
  return result.data;
};

const useChatRoomQuery = (roomId: string | undefined) => {
  if (roomId) {
    const { data, isError, isSuccess } = useQuery({
      queryKey: ['room', roomId],
      queryFn: () => getChatRoom(roomId),
    });

    return { data, isError, isSuccess };
  }

  return { data: undefined, isError: undefined, isSuccess: undefined };
};

export default useChatRoomQuery;
