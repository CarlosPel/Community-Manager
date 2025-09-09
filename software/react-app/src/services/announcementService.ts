export interface Announcement {
    id: number;
    title: string;
    content: string;
    date: string;
}

const API_URL = `${import.meta.env.API_URL}/announcements`;

export async function fetchAnnouncements(): Promise<Announcement[]> {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Error al obtener anuncios");
    return res.json();
}
