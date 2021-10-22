import { Component, EventEmitter, OnInit, Output, ViewChild, AfterViewInit, ElementRef, Input } from '@angular/core';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-task-controller',
  templateUrl: './task-controller.component.html',
  styleUrls: ['./task-controller.component.css']
})
export class TaskControllerComponent implements OnInit, AfterViewInit {
  controllerState: boolean = true;
  @Output() controllerEvent = new EventEmitter();
  @Input() task: any
  @ViewChild('moreBTN') moreBTN!: ElementRef;
  constructor(public __TaskService: TaskService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.controllerToggle(this.moreBTN.nativeElement.clientWidth)
    }, 1);
  }
  ngAfterViewInit(): void {
  }
  controllerToggle(moreWidth: any) {
    this.controllerState = !this.controllerState
    this.controllerEvent.emit({
      controllerState: this.controllerState,
      moreWidth: moreWidth
    })
  }

}
