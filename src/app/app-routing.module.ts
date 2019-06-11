import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import {UserComponent} from './components/user/user.component';

const routes: Routes = [
{   path: "",    component:LoginComponent },
{   path:"register", component : RegisterComponent },
{   path:"home" , component : HomeComponent },
{   path:"users" , component : UserComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
