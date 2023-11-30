import { IsNumber, IsInt } from 'class-validator';

export class EngagementDTO {
  @IsInt()
  lectureHours: number;

  @IsInt()
  labHours: number;

  @IsInt()
  supplementalHours: number;

  @IsInt()
  canvasHours: number;

  @IsNumber()
  lectureWeight: number;

  @IsNumber()
  labWeight: number;

  @IsNumber()
  suppWeight: number;

  @IsNumber()
  canvasWeight: number;
}
