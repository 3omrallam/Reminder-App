import { Component, OnInit } from '@angular/core';
import { TagService } from 'src/app/core/services/tag.service';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.css']
})
export class PinComponent implements OnInit {

  constructor(public __TagService: TagService, public __TaskService: TaskService) { }

  ngOnInit(): void {
  }

}
