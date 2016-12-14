
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LocationStrategy,HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { MainRoutes } from './routes/main';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [
       //{provide:LocationStrategy,useClass:HashLocationStrategy},
       //{ provide: APP_BASE_HREF, useValue: '/' } //configures basepath <--- this right here
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
