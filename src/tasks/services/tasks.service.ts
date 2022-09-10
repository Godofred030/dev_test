import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './../entities/task.entity';

@Injectable()
export class TasksService {

  constructor(
    @InjectRepository(Task) private tasksRepo: Repository<Task>,
  ) {}

  findAll() {
    return this.tasksRepo.find();
  }

  findOne(id: number) {
    return this.tasksRepo.findOne({where:{id: id}})
  }

  create(body: any) {
    const newTask = new Task();
    newTask.name = body.name;
    newTask.description = body.description;
    return this.tasksRepo.save(newTask);
  }
//orm pending for time uwu
  async update(id: number, body: any) {
    const task = await this.tasksRepo.findOne({where:{id: id}});
    this.tasksRepo.merge(task, body);
    return this.tasksRepo.save(task);
  }

  async remove(id: number) {
    await this.tasksRepo.delete(id);
    return true;
  }
}