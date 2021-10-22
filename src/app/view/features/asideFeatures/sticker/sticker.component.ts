import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AsideService } from 'src/app/core/services/aside.service';

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.css']
})
export class StickerComponent implements OnInit {
  constructor(public title: Title, public __AsideService: AsideService) { }

  ngOnInit(): void { }

  setToggleAside() {
    this.__AsideService.asideBTNState = !this.__AsideService.asideBTNState
  }


}
