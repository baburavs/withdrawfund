import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WidrawfundComponent } from './widrawfund/widrawfund.component';

const routes: Routes = [
  {
    path:'',
    component:WidrawfundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
