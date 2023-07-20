import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'rooms' ,component: RoomsComponent},
  {path: 'rooms/add' ,component:RoomsAddComponent},
]

@NgModule({
  declarations: [],


  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
