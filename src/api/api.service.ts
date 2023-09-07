import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ApiDto } from './dto';
import { UserDto } from 'src/user/dto';
import { CatchExceptionHandler } from 'src/lib';
import { currentDayOfWeek } from 'src/util/current-day';
import { getCurrentUTCTime } from 'src/util/utc-time';

@Injectable()
export class ApiService {
    async getUser(dto: ApiDto){
        try{
            if(!dto.slack_name) throw new HttpException('slack name is required', HttpStatus.UNPROCESSABLE_ENTITY);

            if(!dto.track) throw new HttpException('track is required', HttpStatus.UNPROCESSABLE_ENTITY);

            const user: UserDto = {
                slack_name: dto.slack_name,
                track: dto.track,
                current_Day: currentDayOfWeek(),
                utc_time: await getCurrentUTCTime(),
                github_file_url: 'https://github.com/destinyayomah/hng-backend-stage1/blob/main/src/main.ts',
                github_repo_url: 'https://github.com/destinyayomah/hng-backend-stage1',
                status_code: 200
            }

            return user;
        }catch(error){
            console.log(error.message);
            CatchExceptionHandler(error);
        }
    }
}
 