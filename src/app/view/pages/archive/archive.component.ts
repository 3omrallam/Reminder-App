import { Component, OnInit } from '@angular/core';
import { TagService } from 'src/app/core/services/tag.service';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  constructor(public __TagService: TagService, public __TaskService: TaskService) { }

  ngOnInit(): void {
  }

}
