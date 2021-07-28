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
@NgModule({
  declarations: [
    AppComponent,
    ToolBarCompComponent,
    SideMenuCompComponent,
    UserCardMComponent,
    LoginCardComponent
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
