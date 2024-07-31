export interface FriendDTO {
  type: string;
  id: string;
  attributes: {
    avatar: string;
    child: boolean;
    friend: boolean;
    name: string;
  };
}
