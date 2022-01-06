import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgotComponent } from './Components/forgot/forgot.component';
import { ResetComponent } from './Components/reset/reset.component';
import { CreateNotesComponent } from './Components/create-notes/create-notes.component';
import { IconsComponent } from './Components/icons/icons.component';
import { NotesComponent } from './Components/notes/notes.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

const routes: Routes = [
  {path:"register", component:RegisterComponent},
  {path:"", component:LoginComponent},
  {path:"login", component:LoginComponent},
  {path:"forgot", component:ForgotComponent},
  {path:"reset", component:ResetComponent},
  {path:"create-notes", component:CreateNotesComponent},
  {path:"icons", component:IconsComponent},
  {path:"notes", component:NotesComponent},
  {path:"dashboard", component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
