import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpClientJsonpModule  } from '@angular/common/http';


import { UserComponent } from './components/user/user.component';
import { NavMenuComponent } from './layout-components/navmenu/navmenu.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { AppComponent } from './components/app/app.component';
import { AdminComponent } from './components/admin/admin.component';
import { HeaderComponent } from './layout-components/header/header.component';
import { LayoutComponent } from './layout-components/layout/layout.component';
import { FooterComponent } from './layout-components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


import { appRouter, appRoutingProviders } from './app.routing';


import { AppService } from './services/app.service';
import { AuthorService } from './services/author/author.service';
import { APP_BASE_HREF } from '@angular/common';

import { httpInterceptorProviders } from './components/interceptors/index';
import { EditService } from './services/author/author.edit.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    AdminComponent,
    HeaderComponent,
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GridModule,
    FormsModule,
    HttpClientModule, 
    HttpClientJsonpModule,
    ReactiveFormsModule,
    appRouter
  ],
  providers: [
    AppService,
    AuthorService,
    appRoutingProviders,
    {
      provide: APP_BASE_HREF,
      useValue: '/'
    },
    {
      deps: [HttpClient],
      provide: EditService,
      useFactory: (jsonp: HttpClient) => () => new EditService(jsonp)
    },
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
