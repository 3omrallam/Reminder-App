import { AsideService } from './../services/aside.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  constructor(public __aside: AsideService) { }

  ngOnInit(): void {
  }

}
