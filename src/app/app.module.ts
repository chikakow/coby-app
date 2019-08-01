import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalFactoryService } from './services/animal-factory.service';
import { ButtonClickComponent } from './button-click/button-click.component';
import { PositionComponent } from './position/position.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonClickComponent,
    PositionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AnimalFactoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
