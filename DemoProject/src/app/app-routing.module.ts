import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterCardComponent } from './register-card/register-card.component';
import { LoginCardComponent } from './login-card/login-card.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { Feature01Component } from './feature01/feature01.component';
import { UserAuthGuard } from './user-auth.guard';
const routes: Routes = [
  {path: '',redirectTo:"home",pathMatch:'full'},
  {path: 'userRegister',component:RegisterCardComponent},
  {path: 'userLogin',component:LoginCardComponent},
  {path: 'home',component:HomeComponentComponent},
  {path: 'feature_01',component:Feature01Component , canActivate:[UserAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
