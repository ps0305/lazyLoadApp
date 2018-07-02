import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from "@angular/http";
import { PageoneComponent } from "./components/pageone.component";
import { IndexComponent } from "./components/index.component";
import { lazyRoutes } from "./app.routes";
import { AuthService } from "./auth.service";
@NgModule({
  declarations: [
    AppComponent,
    PageoneComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    lazyRoutes
  ],
  providers: [AuthService],
  bootstrap: [IndexComponent]
})
export class AppModule { }
