import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking/booking.component';
import { BookingRoutingModule } from './booking-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';





@NgModule({
  declarations: [
    BookingComponent
  ],
  imports: [
    CommonModule, BookingRoutingModule, ReactiveFormsModule,FormsModule,MatFormFieldModule,MatInputModule,MatDatepickerModule,
    MatNativeDateModule,MatExpansionModule,MatIconModule
  ]
})
export class BookingModule { }
