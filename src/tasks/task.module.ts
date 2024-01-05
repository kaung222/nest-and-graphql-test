import { Module } from '@nestjs/common';
import { TasksResolver } from './tasks.resolver';
import { Task } from './entities/tasks.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from './task.service';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  providers: [TasksResolver, TasksService],
})
export class TaskModule {}
