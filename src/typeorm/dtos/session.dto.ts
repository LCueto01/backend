import { IsInt, IsString, IsOptional } from 'class-validator';

export class SessionDTO {
  @IsOptional()
  session_id: number;

  @IsInt()
  lectureHours: number;

  @IsInt()
  labHours: number;

  @IsInt()
  supplementalHours: number;

  @IsInt()
  canvasHours: number;

  @IsString()
  output: string;
}
