import { useState } from "react";
import ReactPullToRefresh from "react-pull-to-refresh";

export const BulletinBoard = async () => {
    const [announcements, loadAnnouncements] = useState(fetchAnnouncements());

    const refreshAnnouncements = async (): Promise<void> => {
        loadAnnouncements(fetchAnnouncements());
    }

    return (
        <ReactPullToRefresh onRefresh={refreshAnnouncements}>
            <div>
                <h2>Tablón de Anuncios</h2>
                {(await announcements).map((announcement: { title: string; content: string; date: string; }, index: number) => (
                    <div key={index}>
                        <h3>{announcement.title}</h3>
                        <p>{announcement.content}</p>
                    </div>
                ))}
            </div>
        </ReactPullToRefresh>
    );
};

async function fetchAnnouncements() {
    const response = await fetch("/api/announcements"); // reemplaza con tu endpoint real
    if (!response.ok) {
        throw new Error("Error al obtener anuncios");
    }
    return response.json();
};
