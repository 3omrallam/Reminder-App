import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testApp';
  constructor(public activatedRouter: ActivatedRoute, public router: Router) { }

  log() {
    console.log(this.activatedRouter);
    console.log(this.router);
    return this.router.navigateByUrl('login')

  }
}
