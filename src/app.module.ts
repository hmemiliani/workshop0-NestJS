import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoansModule } from './loans/loans.module';
import { UsersModule } from './users/users.module';
import { LoansController } from './loans.controller';

@Module({
  imports: [LoansModule, UsersModule],
  controllers: [AppController, LoansController],
  providers: [AppService],
})
export class AppModule {}
