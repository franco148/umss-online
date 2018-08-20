import { UserStory } from './user-story.model';
export class Backlog {

    id: number;
    description: string;
    ammountOfUserStories: number;

    isDeleted: boolean;

    userStories: UserStory[];

    createdAt: Date;
    updatedAt: Date;
}
