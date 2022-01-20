import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LoginComponent } from './Components/login/login.component';
import { ForgotComponent } from './Components/forgot/forgot.component';
import { ResetComponent } from './Components/reset/reset.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { CreateNotesComponent } from './Components/create-notes/create-notes.component';
import { IconsComponent } from './Components/icons/icons.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { DisplayNoteCardsComponent } from './Components/display-note-cards/display-note-cards.component';
import { AuthguardServiceService } from './Services/AuthguardService/authguard-service.service';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UpdateNoteComponent } from './Components/update-note/update-note.component';
import {MatMenuModule} from '@angular/material/menu';
import { GetTrashNotesComponent } from './Components/get-trash-notes/get-trash-notes.component';
import { GetArchiveNotesComponent } from './Components/get-archive-notes/get-archive-notes.component';
import { GetReminderNotesComponent } from './Components/get-reminder-notes/get-reminder-notes.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotComponent,
    ResetComponent,
    CreateNotesComponent,
    IconsComponent,
    DashboardComponent,
    SidenavComponent,
    GetAllNotesComponent,
    DisplayNoteCardsComponent,
    UpdateNoteComponent,
    GetTrashNotesComponent,
    GetArchiveNotesComponent,
    GetReminderNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatTooltipModule,
    MatListModule,
    MatDialogModule,
    FormsModule,
    FlexLayoutModule,
    MatMenuModule
  ],
  providers: [AuthguardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
