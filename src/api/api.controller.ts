import { HttpCode, HttpStatus, Controller, Query, Get } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiDto } from './dto';

@Controller('api')
export class ApiController {
    constructor(private readonly apiService: ApiService){}

    @Get()
    @HttpCode(HttpStatus.CREATED)
    async getUser(@Query() dto: ApiDto){
        return await this.apiService.getUser(dto);
    }
}
