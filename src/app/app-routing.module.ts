import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './component/notfound.component';

const routes: Routes = [
  {
    path:'', 
    redirectTo:'client',
    pathMatch:'full',
    title:'Client'
  },
  {
    path:'admin',
    loadChildren:()=>
    import('./modules/admin/admin.module')
    .then((m)=>m.AdminModule)
  },
  {
    path:'client',
    loadChildren:()=>
    import('./modules/client/client.module')
    .then((m)=>m.ClientModule)
  },
  {
    path:'**',
    component:NotFoundComponent,
    title:'NotFound'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
