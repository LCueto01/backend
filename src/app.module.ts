import { Module } from '@nestjs/common';
import { EngagementController } from './controllers/engagement.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FailController } from './controllers/failure.controller';
import { AppService } from './app.service';
import { SessionEntity } from './typeorm/entities/Session';
import { SessionModule } from './typeorm/session.module';
import { AttendanceController } from './controllers/attendance.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'testuser',
      password: 'testuser123',
      database: 'session_storage',
      entities: [SessionEntity],
      synchronize: true,
    }),
    SessionModule,
  ],
  controllers: [EngagementController, FailController, AttendanceController],
  providers: [AppService],
})
export class AppModule {}
// TypeOrmModule.forRoot({
//   type: 'mysql',
//   host: 'localhost',
//   port: 3306,
//   username: 'testuser',
//   password: 'testuser123',
//   database: 'session_storage',
//   entities: [SessionEntity],
//   synchronize: true,
// }),
