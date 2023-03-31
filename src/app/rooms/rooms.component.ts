import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  hotelName = 'Hilton Hotel';

  numberofRooms = 10;

  hideRooms = false;

  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20
  }

  roomList: RoomList[] = []


  constructor(private roomsService :RoomsService) { }

  ngOnInit(): void{
    this.roomsService.getRooms().subscribe(rooms =>{
      this.roomList = rooms;
    } );


  }



  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(room: RoomList){
    console.log(room);
  }
  addRoom() {
    const room: RoomList = {
      roomNumber: 103,
      roomType: 'Standard room',
      amenities: 'Air condition bathroom',
      price: 400,
      photos: 'https://unsplash.com/photos/qIffpsNK90I',
      checkInTime: new Date('12-Mar-2023'),
      checkOutTime: new Date('13-Mar-2023'),
      rating: 4.76

    };
    this.roomList.push();
  }



}
