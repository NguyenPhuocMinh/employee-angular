import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './Employee/list/list.component';
import { CreateComponent } from './Employee/create/create.component';
import { EditComponent } from './Employee/edit/edit.component';
import { DeleteComponent } from './Employee/delete/delete.component';

const routes: Routes = [
  {path:"list", component:ListComponent},
  {path:"create", component:CreateComponent},
  {path:"edit", component:EditComponent},
  {path:"delete",component:DeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
