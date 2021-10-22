import { Directive, HostListener, Input } from '@angular/core';
import { TaskService } from '../services/task.service';

@Directive({
  selector: '[appTaskControllers]'
})
export class TaskControllersDirective {
  @Input() controllerIndex: any
  @Input() selectedTask: any
  @HostListener('click') taskControllers() {
    this.__TaskService.taskControllers()[this.controllerIndex].controllerMethod(this.selectedTask)
  }
  constructor(public __TaskService: TaskService) { }

}
