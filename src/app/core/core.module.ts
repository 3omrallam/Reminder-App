import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchiveTaskDirective } from './shared/archive-task.directive';
import { TaskControllersDirective } from './shared/task-controllers.directive';



@NgModule({
  declarations: [
    ArchiveTaskDirective,
    TaskControllersDirective
  ],
  imports: [
    CommonModule
  ], exports: [
    ArchiveTaskDirective,
    TaskControllersDirective
  ]
})
export class CoreModule { }
