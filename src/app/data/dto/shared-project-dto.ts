import { User } from '../model/user.model';

export class SharedProjectDto {
  projectId: number;
  sharedWithList: User[];
}
