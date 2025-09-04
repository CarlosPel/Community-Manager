import { AnnouncementCard } from "./AnnouncementCard";
import { Board } from "./Board";

type Announcement = {
  title: string;
  content: string;
  date: string;
};

async function fetchAnnouncements(): Promise<Announcement[]> {
  const response = await fetch("/api/announcements");
  if (!response.ok) throw new Error("Error al obtener anuncios");
  return response.json();
}

export const BulletinBoard = () => (
  <Board
    title="Anuncios"
    fetchData={fetchAnnouncements}
    renderItem={(announcement: Announcement, index: number) => (
      <AnnouncementCard
        key={index}
        title={announcement.title}
        content={announcement.content}
        date={announcement.date}
      />
    )}
  />
);
