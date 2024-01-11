import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from '../client/client.component';
import { ClientRoutingModule } from './client-routing.module';



@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    ClientRoutingModule,
    CommonModule
  ]
})
export class ClientModule { }
