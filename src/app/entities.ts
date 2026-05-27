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
    links: Record<string, string>;
}

interface BibliographyItem {
    id?: string;
    year: number;
    title: string;
    type: string;
    context: string;
    url?: string; 
}

interface Reading {
    id?: number;
    title: string;
    url: string;
}