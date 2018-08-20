// tslint:disable-next-line:quotemark
import { User } from "./user.model";

export class Task {
    id: number;
    name: string;
    description: string;
    priority: string;

    assignedTo: User;
    estimatedTime: number;

    createdAt: Date;
    updatedAt: Date;
}
