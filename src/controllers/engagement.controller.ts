import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from '../app.service';
import { EngagementDTO } from '../classes/engagement.dto';

@Controller('studentEngagement')
export class EngagementController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  studentEngagements(@Body() engagementMetrics: EngagementDTO): number {
    const {
      lectureHours,
      labHours,
      supplementalHours,
      canvasHours,
      lectureWeight,
      labWeight,
      suppWeight,
      canvasWeight,
    } = engagementMetrics;

    const totalLabHours = 40;
    const totalLectureHours = 60;
    const totalSuppHours = 80;
    const totalCanvasHours = 30;

    const lectureCalc = (lectureHours * lectureWeight) / totalLectureHours;
    const labCalc = (labHours * labWeight) / totalLabHours;
    const suppCalc = (supplementalHours * suppWeight) / totalSuppHours;
    const canvasCalc = (canvasHours * canvasWeight) / totalCanvasHours;

    const engagementScore = (
      lectureCalc +
      labCalc +
      suppCalc +
      canvasCalc
    ).toFixed(2);

    return Number(engagementScore);
  }
}
