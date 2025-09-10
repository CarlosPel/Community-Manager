export interface Announcement {
    id: number;
    title: string;
    content: string;
    date: string;
}

export async function fetchAnnouncements(): Promise<Announcement[]> {
    const res = await fetch('/api/announcements');
    if (!res.ok) throw new Error("Error al obtener anuncios");
    return res.json();
}
