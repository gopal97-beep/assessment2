import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonalComponent } from './personal/personal.component';
import { EducationalComponent } from './educational/educational.component';
import { DispComponent } from './disp/disp.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  {path:'',pathMatch:'full',component:HomeComponent},
  {path:'personal',component:PersonalComponent},
  {path:'educational',component:EducationalComponent},
  {path:'disp/:id',component:DispComponent},
  {path:'edit',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
