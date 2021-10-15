import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './headerFeatures/search-bar/search-bar.component';
import { StickerComponent } from './asideFeatures/sticker/sticker.component';
import { NavigatorsComponent } from './asideFeatures/navigators/navigators.component';
import { UserComponent } from './asideFeatures/user/user.component';
import { TaskComponent } from './mainFeatures/taskFeature/task/task.component';
import { CreateTaskComponent } from './mainFeatures/taskFeature/create-task/create-task.component';
import { TaskControllerComponent } from './mainFeatures/taskFeature/task-controller/task-controller.component';
import { TagComponent } from './mainFeatures/tags/tag/tag.component';



@NgModule({
  declarations: [
    SearchBarComponent,
    StickerComponent,
    NavigatorsComponent,
    UserComponent,
    TaskComponent,
    CreateTaskComponent,
    TaskControllerComponent,
    TagComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SearchBarComponent,
    StickerComponent,
    NavigatorsComponent,
    UserComponent,
    TaskComponent,
    CreateTaskComponent,
    TagComponent

  ]
})
export class FeaturesModule { }
