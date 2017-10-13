import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EventEmitterParentComponent,
         IntroductionComponent } from '../_components/index';


const appRoutes: Routes = [
  // Component: 导航到此路由时，路由器需要创建的组件（HeroesComponent）
  { path: 'event-emitter', component: EventEmitterParentComponent },
  { path: 'index', component: IntroductionComponent },
  { path: '', redirectTo: '/index' , pathMatch: 'full' },


];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
