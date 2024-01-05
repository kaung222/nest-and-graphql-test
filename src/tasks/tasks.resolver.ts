// src/tasks/tasks.resolver.ts
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TasksService } from './task.service';
import { Task } from './entities/tasks.entity';

@Resolver(() => Task)
export class TasksResolver {
  constructor(private tasksService: TasksService) {}

  @Query(() => [Task])
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Mutation(() => Task)
  createTask(
    @Args('title') title: string,
    @Args('description') description?: string,
  ): Task {
    return this.tasksService.createTask(title, description);
  }
}
