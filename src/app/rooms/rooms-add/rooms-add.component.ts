import { Component } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.css']
})
export class RoomsAddComponent {

  room : RoomList = {
    roomNumber: 10,
    roomType: '',
    amenities: '',
    checkInTime: new Date(),
    checkOutTime: new Date(),
    photos: '',
    price: 0,
    rating: 0

  }
  successMessage: string = '';
  constructor(private roomsService: RoomsService){}

  addRoom(){
    this.roomsService.addRooms(this.room).subscribe((data) => { this.successMessage = 'Room added successfully'
      
    })

  }
}
