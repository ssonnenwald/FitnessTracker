import { Activity } from './activity';
import { Pagination } from './pagination';

export interface ActivityLogListDTO {
  activities: Activity[];
  pagination: Pagination;
}
