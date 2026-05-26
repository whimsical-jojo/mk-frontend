interface Appointment {
    id?: number;
    date: string;
    time: string;
    guests?: string[];
    location: string;
    title: string;
    description?: string;
}

interface Book {
    id?: number;
    title: string;
    details?: string;
    description?: string;
    imageUrl?: string;
}