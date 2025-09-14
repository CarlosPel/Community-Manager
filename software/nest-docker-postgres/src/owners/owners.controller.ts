// owners.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { OwnersService } from './owners.service';

@Controller('owners')
export class OwnersController {
    constructor(private ownersService: OwnersService) { }

    @Post()
    async create(@Body() body: { name: string; email: string; premises_id: number }) {
        return this.ownersService.createOwner(body);
    }
}
