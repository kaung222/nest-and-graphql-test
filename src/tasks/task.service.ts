// src/tasks/tasks.service.ts
import { Injectable } from '@nestjs/common';
import { Task } from './entities/tasks.entity';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(title: string, description?: string): Task {
    const task: Task = {
      id: Date.now().toString(),
      title,
      description,
    };
    this.tasks.push(task);
    return task;
  }
}
