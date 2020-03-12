import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TranslocoComponent} from "./transloco/transloco.component";


const routes: Routes = [{
  path:'transloco',
  component: TranslocoComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
