import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

 

  //bookingForm!: FormGroup;
  submitted = false;

  

 


  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) { }


  /*##################### Booking Form #####################*/
  
  bookingForm = this.fb.group({
    file: [null],
    fullName: this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')]],
      lastName: ['', [Validators.required]]
    }),
      roomId: [''],
      guestEmail: [''],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: [''],
      address: this.fb.group({
      addressline1: [''],
      addressline2: [''],
      City: [''],
      State: [''],
      Country: [''],
      ZipCode: [''],
    }),
      guests: this.fb.array([
        this.fb.group({ guestName: [''], age: new FormControl('')}),
      ]),
    })
// Submit Registration Form

get guests() { 
  
  return this.bookingForm.get('guests') as FormArray; }

   addBooking(){
    console.log(this.bookingForm.getRawValue());
   }

   addGuest(){
    this.guests.push(this.fb.group({ guestName: [''], age: new FormControl('')}))

   }

   removeGuest(i: number){
    
    this.guests.removeAt(i)

   }

   
 

}


