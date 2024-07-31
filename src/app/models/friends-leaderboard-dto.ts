import { FriendDTO } from './friend-dto';
import { PersonDTO } from './person-dto';

export interface getFriendsLeaderboardDTO {
  data: FriendDTO[];
  included: PersonDTO[];
}
