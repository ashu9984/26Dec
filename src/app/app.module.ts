import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import{RegistrationComponent} from './registration.component'
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import{HeaderComponent} from'./header.component';
import{FooterComponent} from'./footer.component';

@NgModule({
  declarations: [
    AppComponent, LoginComponent,RegistrationComponent,HeaderComponent,FooterComponent
  ],
  imports: [
    HttpModule,
    MDBBootstrapModule.forRoot(),    
    BrowserModule, FormsModule, RouterModule.forRoot([{
      path: "registration",
      component: RegistrationComponent
    }, {
      path: 'login',
      component: LoginComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}