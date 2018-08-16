// tslint:disable-next-line:quotemark
import { User } from "./user.model";
import { Task } from './task.model';

export class UserStory {

    id: number;
    name: string;
    description: string;
    priority: string;

    assignedTo: User;
    estimatedTime: number;
    tasks: Task[];

    createdAt: Date;
    updatedAt: Date;
}
