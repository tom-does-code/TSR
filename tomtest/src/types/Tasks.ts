export interface Task {
    id: number;
    title: string;
    details: string;
    priority: 'high' | 'medium' | 'low';
    completed: boolean;
}