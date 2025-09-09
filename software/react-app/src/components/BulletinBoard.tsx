import { fetchAnnouncements, type Announcement } from "../services/announcementService";
import { AnnouncementCard } from "./AnnouncementCard";
import { Board } from "./Board";

export const BulletinBoard = () => (
  <Board
    itemName="Anuncios"
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
