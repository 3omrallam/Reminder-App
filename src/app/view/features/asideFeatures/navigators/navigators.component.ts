import { Component, Input, OnInit } from '@angular/core';
import { AsideService } from './../../services/aside.service';

@Component({
  selector: 'app-navigators',
  templateUrl: './navigators.component.html',
  styleUrls: ['./navigators.component.css']
})
export class NavigatorsComponent implements OnInit {
  @Input() navigator: any
  constructor(public __AsideService: AsideService) { }

  ngOnInit(): void {

  }

}
