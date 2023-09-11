import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AckermanComponent } from './ackerman/ackerman.component';
import { AckermanCalculatorComponent } from './ackerman-calculator/ackerman-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    AckermanComponent,
    AckermanCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
