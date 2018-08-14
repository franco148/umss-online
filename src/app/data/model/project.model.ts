import { Backlog } from './backlog.model';
export class Project {

    id: number;
    name: string;
    completedDateEstimation: Date;
    backlog: Backlog;

    isDeleted: boolean;

    createdAt: Date;
    updatedAt: Date;
    // private
}
