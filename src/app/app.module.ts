import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeeeeeeeLabComponentComponent } from './weeeeeee-lab-component/weeeeeee-lab-component.component';

@NgModule({
  declarations: [
    AppComponent,
    WeeeeeeeLabComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
