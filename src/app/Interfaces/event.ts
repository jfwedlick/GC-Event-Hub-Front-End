export interface EventInfo {
    id: number;
    name: string;
    description: string;
    startDate: Date;
    location: string;
    duration: number
}

export interface SubmitEventInfo {
    name: string;
    description: string;
    startDate: Date;
    location: string;
    duration: number
}

export interface EventGet {
    id: number;
    name: string;
    description: string;
    startDate: Date;
    location: string;
    duration: number;
    isFavorite: boolean
}


