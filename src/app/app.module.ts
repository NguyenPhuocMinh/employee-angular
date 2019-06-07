import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './Employee/list/list.component';
import {FormsModule} from '@angular/forms';
import { ServiceService } from '../app/Service/service.service';
import {  HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './Employee/create/create.component';
import { EditComponent } from './Employee/edit/edit.component';
import { DeleteComponent } from './Employee/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
