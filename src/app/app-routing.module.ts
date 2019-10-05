import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestPageComponent} from './test-page/test-page.component';
import {StartPageComponent} from './start-page/start-page.component';


const routes: Routes = [
  {
    path: 'test',
    component: TestPageComponent,
    data: {animation: 'testPage'}
  },
  {
    path: '',
    component: StartPageComponent,
    data: {animation: 'homePage'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
