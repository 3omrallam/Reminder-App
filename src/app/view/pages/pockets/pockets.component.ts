import { Component, OnInit } from '@angular/core';
import { TagService } from '../../features/services/tag.service';
import { TaskService } from '../../features/services/task.service';

@Component({
  selector: 'app-pockets',
  templateUrl: './pockets.component.html',
  styleUrls: ['./pockets.component.css']
})
export class PocketsComponent implements OnInit {

  constructor(public __TagService: TagService, public __TaskService: TaskService) { }

  ngOnInit(): void {
  }

}
