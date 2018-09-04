export interface UserStoryDto {
    name: string;
    description: string;
    priority: string;
    estimatedTime: number;
    startedAt: Date;
    assignedToId: number;
    createdById: number;
}
