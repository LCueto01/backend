import { IsNumber } from 'class-validator';

export class FailureDTO {
  @IsNumber()
  cutOff: number;

  @IsNumber()
  engagementScore: number;
}
