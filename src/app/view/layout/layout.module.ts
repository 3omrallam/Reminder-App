import { RouterModule } from '@angular/router';
import { FeaturesModule } from './../features/features.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { HeaderComponent } from './header/header.component';
import { MasterContainerComponent } from './master-container/master-container.component';
import { AsideService } from './services/aside.service';
import { LayoutRouterModule } from './layout-router.module';
import { PagesModule } from '../pages/pages.module';



@NgModule({
  declarations: [
    AsideComponent,
    HeaderComponent,
    MasterContainerComponent
  ],
  imports: [
    CommonModule,
    FeaturesModule,
    RouterModule,
    PagesModule
  ],
  exports: [
    AsideComponent,
    HeaderComponent,
    MasterContainerComponent
  ],
  providers: [AsideService]
})
export class LayoutModule { }
