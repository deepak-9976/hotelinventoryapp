import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList :RoomList[]=
    [{
      roomNumber: 101,
      roomType: 'Delux room',
      amenities: 'Air condition',
      price: 500,
      photos: 'https://unsplash.com/photos/qIffpsNK90I',
      checkInTime: new Date('11-Mar-2023'),
      checkOutTime: new Date('12-Mar-2023'),
      rating: 4.5
  
    },
    {
      roomNumber: 102,
      roomType: 'Standard room',
      amenities: 'Air condition bathroom',
      price: 400,
      photos: 'https://unsplash.com/photos/qIffpsNK90I',
      checkInTime: new Date('12-Mar-2023'),
      checkOutTime: new Date('13-Mar-2023'),
      rating: 4.76
  
    },
  
  ]

  constructor() { 
    console.log('Room service initialized ..')
  }


  getRooms() {
    return this.roomList;
  }



}
