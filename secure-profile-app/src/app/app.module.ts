import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';



import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from './app.routing';
import { MyDetailsComponent } from './my-details/my-details.component';
import { MyImageComponent } from './my-image/my-image.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyDetailsComponent,
    MyImageComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
