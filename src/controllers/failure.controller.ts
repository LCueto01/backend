import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { FailureDTO } from '../classes/failure.dto';
import { AppService } from '../app.service';

@Controller('riskFailure')
export class FailController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @UsePipes(
    new ValidationPipe({
      transform: true,
      forbidUnknownValues: true,
    }),
  )
  riskFailure(@Body() failureMetrics: FailureDTO): boolean {
    const { cutOff, engagementScore } = failureMetrics;

    return engagementScore < cutOff;
  }
}
