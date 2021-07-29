import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterCardComponent } from './register-card/register-card.component';
import { LoginCardComponent } from './login-card/login-card.component';
import { HomeComponentComponent } from './home-component/home-component.component';
const routes: Routes = [
  {path: 'userRegister',component:RegisterCardComponent},
  {path: 'userLogin',component:LoginCardComponent},
  {path: 'home',component:HomeComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
