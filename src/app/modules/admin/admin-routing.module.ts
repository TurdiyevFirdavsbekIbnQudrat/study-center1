import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { TeacherModule } from './teacher/teacher.module';


const routes:Routes=[
  {
    path:'',component:AdminComponent,
    children:
    [
      {
        path:'teacher',
         loadChildren:()=>
         import('./teacher/teacher.module')
         .then((m)=>m.TeacherModule)
       }
    ]
  },
 
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AdminRoutingModule { }
