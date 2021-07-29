import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { ToolBarCompComponent } from './tool-bar-comp/tool-bar-comp.component';
import { SideMenuCompComponent } from './side-menu-comp/side-menu-comp.component';
import { UserCardMComponent } from './user-card-m/user-card-m.component';
import { LoginCardComponent } from './login-card/login-card.component';
import { RegisterCardComponent } from './register-card/register-card.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { Feature01Component } from './feature01/feature01.component';
import { HomeSheetCompComponent } from './home-sheet-comp/home-sheet-comp.component';
@NgModule({
  declarations: [
    AppComponent,
    ToolBarCompComponent,
    SideMenuCompComponent,
    UserCardMComponent,
    LoginCardComponent,
    RegisterCardComponent,
    HomeComponentComponent,
    Feature01Component,
    HomeSheetCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,DemoMaterialModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
