export interface EventInfo {
    id: number;
    name: string;
    description: string;
    startdate: Date;
    location: string;
    duration: number
}

export interface SubmitEventInfo {
    name: string;
    description: string;
    startdate: Date;
    location: string;
    duration: number
}

export interface UserEvents{
    usrEvent: boolean;
    eventId: number;
    eventName: string;
    favoriteId:number;
    favorite: boolean;
}

