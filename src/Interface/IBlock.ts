export interface IBlock {
    title: string;
    duration: string;
    company: string;
    description: string;
    dateStart: number;
    dateEnd?: number;
    stack: string[];
    tasks: string[];
}
