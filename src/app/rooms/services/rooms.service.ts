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

  addRooms(room: RoomList){
    return this.http.post<RoomList[]>('/api/rooms' , room)

  }

  editRoom(room: RoomList){
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}` ,room);
  }

  delete(id: String){
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`);
  }



}
