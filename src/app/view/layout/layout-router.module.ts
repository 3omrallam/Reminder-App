import { TrashComponent } from './../pages/trash/trash.component';
import { ArchiveComponent } from './../pages/archive/archive.component';
import { CategoriesComponent } from './../pages/categories/categories.component';
import { PocketsComponent } from './../pages/pockets/pockets.component';
import { RemindersComponent } from './../pages/reminders/reminders.component';
import { TasksComponent } from './../pages/tasks/tasks.component';
import { DashboardComponent } from './../pages/dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { PrayerComponent } from './../pages/prayer/prayer.component';

export const LayoutRouterModule: Routes = [
  { path: 'prayer', component: PrayerComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'reminders', component: RemindersComponent },
  { path: 'my-pocket', component: PocketsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'archive', component: ArchiveComponent },
  { path: 'trash', component: TrashComponent },
]
