import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view.component';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    ViewComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
  ],
  exports: [ViewComponent],
})
export class ViewModule { }
