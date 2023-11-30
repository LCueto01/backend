import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from '../app.service';
import { AttendanceDTO } from '../classes/attendance.dto';

@Controller('totalAttendance')
export class AttendanceController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @UsePipes(
    new ValidationPipe({
      transform: true,
      forbidUnknownValues: true,
    }),
  )
  totalAttendance(@Body() attendanceDTO: AttendanceDTO): number {
    const { lectureHours, labHours, supplementalHours, canvasHours } =
      attendanceDTO;

    const outcome: number =
      lectureHours + labHours + supplementalHours + canvasHours;

    return outcome;
  }
}
