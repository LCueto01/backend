import { IsInt } from 'class-validator';

export class AttendanceDTO {
  @IsInt()
  lectureHours: number;

  @IsInt()
  labHours: number;

  @IsInt()
  supplementalHours: number;

  @IsInt()
  canvasHours: number;
}
