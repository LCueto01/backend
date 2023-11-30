import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Equal } from 'typeorm';
import { SessionEntity } from '../entities/Session';
import { Session } from '../sessionType';
import { Repository } from 'typeorm';

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(SessionEntity)
    private userSession: Repository<SessionEntity>,
  ) {}

  getSessionId(id: string) {
    return this.userSession.find({ where: { session_id: Equal(id) } });
  }

  getPreviousSession() {
    return this.userSession
      .createQueryBuilder('entity')
      .select('MAX(entity.session_id)', 'maxId')
      .getRawOne();
  }

  createSession(sessionDetails: Session) {
    const newSession = this.userSession.create({ ...sessionDetails });
    return this.userSession.save(newSession);
  }
}
