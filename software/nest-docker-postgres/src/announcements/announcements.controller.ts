import { Controller, Get } from '@nestjs/common';
import { Announcement } from './announcement.entity';
import { AnnouncementsService } from './announcements.service';

@Controller('announcements')
export class AnnouncementsController {
    constructor(private readonly announcementsService: AnnouncementsService) { }

    @Get()
    async findAll(): Promise<Announcement[]> {
        return this.announcementsService.findAll();
    }
}
