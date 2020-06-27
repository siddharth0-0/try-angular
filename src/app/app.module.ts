import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { personService } from './person-detail/person-service.service';
import { detailService } from './user-detail/detail-service.service';
import { dataOnClickService } from './user-detail/data-on-click.service';
import { editOnClickService } from './user-detail/edit-on-click.service';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DataOnClickComponent } from './user-detail/data-on-click.component';


const appRoutes: Routes = [
  { path : '', redirectTo: 'input', pathMatch: 'full'},
  { path : 'input', component: PersonDetailComponent},
  { path : 'email', component: UserDetailComponent},
  { path : 'detail', component: DataOnClickComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    PersonDetailComponent,
    UserDetailComponent,
    DataOnClickComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ personService , detailService, dataOnClickService, editOnClickService],
  bootstrap: [AppComponent]
})
export class AppModule { }
