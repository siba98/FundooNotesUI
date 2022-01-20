import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgotComponent } from './Components/forgot/forgot.component';
import { ResetComponent } from './Components/reset/reset.component';
import { CreateNotesComponent } from './Components/create-notes/create-notes.component';
import { IconsComponent } from './Components/icons/icons.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { DisplayNoteCardsComponent } from './Components/display-note-cards/display-note-cards.component';
import { AuthenticationGuard } from './authentication.guard';
import { UpdateNoteComponent } from './Components/update-note/update-note.component';
import { GetTrashNotesComponent } from './Components/get-trash-notes/get-trash-notes.component';
import { GetArchiveNotesComponent } from './Components/get-archive-notes/get-archive-notes.component';

const routes: Routes = [
  {path:"register", component:RegisterComponent},
  {path:"", component:LoginComponent},
  {path:"login", component:LoginComponent},
  {path:"forgot", component:ForgotComponent},
  {path:"reset", component:ResetComponent},
  {path:"create-notes", component:CreateNotesComponent},
  {path:"icons", component:IconsComponent},
  {path:"dashboard", component:DashboardComponent, canActivate:[AuthenticationGuard],
  children:[
    {path:'',redirectTo:"get-all-notes", pathMatch:'full'},
    {path:"get-all-notes", component:GetAllNotesComponent},
    {path:"get-trash-notes", component:GetTrashNotesComponent},
  {path:"get-archive-notes", component:GetArchiveNotesComponent},
  ]
},
  {path:"sidenav", component:SidenavComponent},
  {path:"get-all-notes", component:GetAllNotesComponent},
  {path:"display-note-cards", component:DisplayNoteCardsComponent},
  {path:"update-note", component:UpdateNoteComponent},
  {path:"get-trash-notes", component:GetTrashNotesComponent},
  {path:"get-archive-notes", component:GetArchiveNotesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
