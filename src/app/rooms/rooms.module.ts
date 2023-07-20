import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomsComponent } from './rooms.component';
import { FormsModule } from '@angular/forms';
import { RoomsRoutingModule } from './rooms-routing.module';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [
    RoomsAddComponent,
    RoomsListComponent,
    RoomsComponent,
  ],
  imports: [
    CommonModule,FormsModule, RoomsRoutingModule,HeaderModule


  ]
})
export class RoomsModule { }
