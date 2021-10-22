import { Component, OnInit } from '@angular/core';
import { AsideService } from 'src/app/core/services/aside.service';
import { TaskService } from '../core/services/task.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(public __AsideService: AsideService, public __TaskService: TaskService) { }

  ngOnInit(): void {
    this.__TaskService.isLocalStorageEmpty()

  }

}
