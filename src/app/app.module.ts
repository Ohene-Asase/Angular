import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import {MatButtonModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import{MatFormFieldModule,
MatInputModule,
MatCardModule,MatProgressSpinnerModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatProgressSpinnerModule,
    FlexLayoutModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
