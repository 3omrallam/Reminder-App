import { Component, OnInit } from '@angular/core';
import { TagService } from '../../features/services/tag.service';
import { TaskService } from '../../features/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(public __TaskService: TaskService, public __TagService: TagService) { }

  ngOnInit(): void {
    this.__TaskService.isLocalStorageEmpty()
  }

}
