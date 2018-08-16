import { UserStory } from './user-story.model';

export class Sprint {

    id: number;
    name: string;
    startedOn: Date;
    completedOn: Date;

    userStories: UserStory[];

    createdAt: Date;
    updatedAt: Date;
}
