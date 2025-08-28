import { useState } from "react";
import ReactPullToRefresh from "react-pull-to-refresh";

class Announcement {
    title!: string;
    content!: string;
}

const fetchAnnouncements = (): Announcement[] => {
    return [
        { title: "Anuncio 1", content: "Contenido del anuncio 1" },
        { title: "Anuncio 2", content: "Contenido del anuncio 2" },
        { title: "Anuncio 3", content: "Contenido del anuncio 3" }
    ];
};

export const BulletinBoard = () => {
    const [announcements, setAnnouncements] = useState(fetchAnnouncements());

    const refreshAnnouncements = async (): Promise<void> => {
        setAnnouncements(fetchAnnouncements());
    }

    return (
        <ReactPullToRefresh onRefresh={refreshAnnouncements}>
            <div>
                <h2>Tablón de Anuncios</h2>
                {announcements.map((announcement, index) => (
                    <div key={index}>
                        <h3>{announcement.title}</h3>
                        <p>{announcement.content}</p>
                    </div>
                ))}
            </div>
        </ReactPullToRefresh>
    );
};
