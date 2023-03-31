import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [RoomsService]
})
export class EmployeeComponent implements OnInit {

  empName :String = 'John';

  constructor(@Self() private roomService :RoomsService){}
  
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
