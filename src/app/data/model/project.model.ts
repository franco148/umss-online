import { Backlog } from './backlog.model';
import { Sprint } from './sprint.model';

export class Project {

    id: number;
    name: string;
    completedDateEstimation: Date;
    backlog: Backlog;
    sprints: Sprint[];

    isDeleted: boolean;

    createdAt: Date;
    updatedAt: Date;
}
