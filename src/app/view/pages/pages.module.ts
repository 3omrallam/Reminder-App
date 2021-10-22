import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrayerComponent } from './prayer/prayer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { RemindersComponent } from './reminders/reminders.component';
import { PocketsComponent } from './pockets/pockets.component';
import { CategoriesComponent } from './categories/categories.component';
import { ArchiveComponent } from './archive/archive.component';
import { TrashComponent } from './trash/trash.component';
import { FeaturesModule } from '../features/features.module';
import { PinComponent } from './pin/pin.component';



@NgModule({
  declarations: [
    PrayerComponent,
    DashboardComponent,
    TasksComponent,
    RemindersComponent,
    PocketsComponent,
    CategoriesComponent,
    ArchiveComponent,
    TrashComponent,
    PinComponent
  ],
  imports: [
    CommonModule,
    FeaturesModule
  ],
  exports: [
    PrayerComponent,
    DashboardComponent,
    TasksComponent,
    RemindersComponent,
    PocketsComponent,
    CategoriesComponent,
    ArchiveComponent,
    TrashComponent
  ]
})
export class PagesModule { }
