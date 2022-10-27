import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstVueComponent } from './visualisation/first-vue/first-vue.component';
import { SecondVueComponent } from './visualisation/second-vue/second-vue.component';
import { ThirdVueComponent } from './visualisation/third-vue/third-vue.component';

const routes: Routes = [
  { path : 'first-vue', component : FirstVueComponent },
  { path : 'second-vue/:index', component : SecondVueComponent },
  { path : 'third-vue/:index', component : ThirdVueComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
