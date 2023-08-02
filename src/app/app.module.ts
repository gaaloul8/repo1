import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule}from'@angular/forms'; 

import { AppComponent } from './app.component';

import { ToolbarcompnentComponent } from './toolbarcompnent/toolbarcompnent.component';
import { ListcomonentComponent } from './listcomonent/listcomonent.component';
import { FootercomponentComponent } from './footercomponent/footercomponent.component';
import { IntepolationsComponent } from './intepolations/intepolations.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarcompnentComponent,
    ListcomonentComponent,
    FootercomponentComponent,
    IntepolationsComponent,
    EventBindingComponent,
    PropertybindingComponent,
    TwowaybindingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
