import { Component, OnInit } from '@angular/core';
import { TagService } from 'src/app/core/services/tag.service';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {

  constructor(public __TaskService: TaskService, public __TagService: TagService) { }

  ngOnInit(): void {
  }

}
