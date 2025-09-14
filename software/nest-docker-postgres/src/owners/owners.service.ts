// owners.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';
import { Owner } from './owner.entity';

@Injectable()
export class OwnersService {
    constructor(
        @InjectRepository(User) private usersRepo: Repository<User>,
        @InjectRepository(Owner) private ownersRepo: Repository<Owner>,
    ) { }

    async createOwner(dto: { name: string; email: string; premises_id: number }) {
        // 1. Crear User
        const user = this.usersRepo.create({
            name: dto.name,
            email: dto.email,
        });
        const savedUser = await this.usersRepo.save(user);

        // 2. Crear Owner con el mismo id
        const owner = this.ownersRepo.create({
            id: savedUser.id,
            premises_id: dto.premises_id,
            user: savedUser,
        });
        return this.ownersRepo.save(owner);
    }
}
