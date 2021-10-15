import { Component, OnInit } from '@angular/core';
import { AsideService } from './features/services/aside.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(public __AsideService: AsideService) { }

  ngOnInit(): void {
  }

}
