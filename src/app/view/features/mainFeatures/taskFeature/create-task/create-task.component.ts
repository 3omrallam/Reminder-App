import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/view/features/models/task'
import { TaskService } from 'src/app/view/features/services/task.service'
@Component({
  selector: 'app-creat-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  newTask() {
    const task: Task = {
      id: Math.floor(Math.random() * 1000),
      taskName: '',
      categories: [],
      reminder: '',
      painter: '',
      pin: false,
      archive: false,
      trash: false,
      pocket: false,
    };
    return task
  }

  constructor(private __TaskService: TaskService) { }

  ngOnInit(): void {
  }

  createNewTask(taskName: string) {
    let newTask: Task = this.newTask()
    newTask.taskName = taskName
    this.__TaskService.allTasks.unshift(newTask)
    this.__TaskService.createNewTask(this.__TaskService.allTasks)
  }
}
