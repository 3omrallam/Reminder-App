import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TaskService } from 'src/app/view/features/services/task.service'
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  controllerState!: boolean
  moreWidth: any
  @Input() task!: any
  @ViewChild('controller') controllerElem!: ElementRef;
  controllerWidth: any
  constructor(public __TaskService: TaskService) {

  }

  ngOnInit(): void {
  }
  controllerStateFN(e: any) {
    this.controllerWidth = -this.controllerElem.nativeElement.clientWidth
    this.controllerState = e.controllerState
    this.moreWidth = e.moreWidth
  }

  pocketToggle(e: any) {
    let checkedValue = e.target.checked
    this.task.pocket = checkedValue
    this.__TaskService.getTaskFromLocalstorage(this.task.id)
  }

  // getTaskFromLocalstorage(taskID: number) {
  //   this.__TaskService.allTasks.map((task: any, index: any) => {
  //     if (task.id === taskID) {
  //       this.__TaskService.runTimeUpdate(index, task)
  //       this.__TaskService.updateTasks(this.__TaskService.allTasks)
  //     }
  //   })
  // }
}
