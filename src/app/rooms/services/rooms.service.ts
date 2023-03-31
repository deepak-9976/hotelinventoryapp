import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList :RoomList[]=
    [
  ]

  constructor(private http: HttpClient) { 
    
    console.log('Room service initialized ..')
  }


  getRooms() {
    return this.http.get<RoomList[]>('/api/rooms');
  }



}
