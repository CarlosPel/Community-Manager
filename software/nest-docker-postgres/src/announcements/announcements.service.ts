import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Announcement } from './announcement.entity';

@Injectable()
export class AnnouncementsService {
    constructor(
        @InjectRepository(Announcement)
        private announcementsRepository: Repository<Announcement>,
    ) { }

    async findAll(): Promise<Announcement[]> {
        return this.announcementsRepository.find();
    }
}
