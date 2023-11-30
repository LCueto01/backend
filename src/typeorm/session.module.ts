import { Module } from '@nestjs/common';
import { SessionController } from './controllers/session.controller';
import { SessionService } from './services/session.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionEntity } from './entities/Session';

@Module({
  imports: [TypeOrmModule.forFeature([SessionEntity])],
  controllers: [SessionController],
  providers: [SessionService],
})
export class SessionModule {}
