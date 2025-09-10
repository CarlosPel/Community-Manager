import { API_URL } from "../data/global_variables";

export interface Announcement {
    id: number;
    title: string;
    content: string;
    date: string;
}

export async function fetchAnnouncements(): Promise<Announcement[]> {
    const res = await fetch(`${API_URL}/announcements`);
    if (!res.ok) throw new Error("Error al obtener anuncios");
    return res.json();
}
