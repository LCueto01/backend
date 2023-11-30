import { Test, TestingModule } from '@nestjs/testing';
import { EngagementController } from '../engagement.controller';
import { AppService } from '../../app.service';

describe('EngagementController', () => {
  let controller: EngagementController;

  const mockInput = {
    canvasHours: 10,
    canvasWeight: 0.25,
    labHours: 20,
    labWeight: 0.25,
    lectureHours: 30,
    lectureWeight: 0.25,
    suppWeight: 0.25,
    supplementalHours: 20,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EngagementController],
      providers: [AppService],
    }).compile();

    controller = module.get<EngagementController>(EngagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should work', () => {
    expect(controller.studentEngagements(mockInput)).toBe(0.4);
  });
});
