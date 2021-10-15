import { LayoutRouterModule } from './view/layout/layout-router.module';
import { ViewComponent } from './view/view.component';
import { MasterContainerComponent } from './view/layout/master-container/master-container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrayerComponent } from './view/pages/prayer/prayer.component';
import { CommonModule } from '@angular/common';

const router: Routes = [
  {
    path: '', component: ViewComponent, children:
      [
        { path: '', component: MasterContainerComponent, children: [...LayoutRouterModule] }
      ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(router)
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }
