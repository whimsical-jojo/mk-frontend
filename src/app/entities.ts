interface Appointment {
    id?: number;
    date: string;
    time: string;
    guests?: string[];
    location: string;
    title: string;
    description?: string;
}