import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { SessionDTO } from '../dtos/session.dto';
import { SessionService } from '../services/session.service';

@Controller('sessions')
export class SessionController {
  constructor(private sessionService: SessionService) {}
  @Get()
  async getSessionId(@Query() query: { id: string }) {
    console.log(query);
    const foundSession = await this.sessionService.getSessionId(query.id);
    return foundSession;
  }

  @Get('prev')
  async getPreviousSession() {
    const maxId = await this.sessionService.getPreviousSession();
    return maxId;
  }

  @Post()
  createSessions(@Body() session: SessionDTO) {
    this.sessionService.createSession(session);
  }
}
