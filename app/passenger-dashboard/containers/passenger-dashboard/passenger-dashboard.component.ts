import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
<div>
    <h3> Airline Passengers </h3>

    <ul>
      <li *ngFor="let passenger of passengers; let i = index;">
        <span class="status"
        [class.checked-in]="passenger.checkedIn"
        ></span>
        {{i}} : {{passenger.fullName}}
        <p>{{ passenger | json}}</p>
        <div class="date">
          Check in date: 
          {{ passenger.checkInDate ? (passenger.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
        </div>
        <div class="children">
          Children : {{ (passenger.children?.length) }}
        </div>
      </li>
    </ul>
</div>
    `
     
})

export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];
  ngOnInit(): void {
  console.log('ngOnit');
    this.passengers = [{
      id: 1,
      fullName: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: []
    },
    {
      id: 2,
      fullName: 'Rose',
      checkedIn: false,
      checkInDate: null,
      children: [{ name: 'Ted', age: 12}, {name: 'Chloe', age: 7}]
    },
    {
      id: 3,
      fullName: 'James',
      checkedIn: true,
      checkInDate: 1491606000000,
      children: null
    },
    {
      id: 4,
      fullName: 'Louise',
      checkedIn: true,
      checkInDate: 14884128000000,
      children: [{name:'Jessica', age: 1}]
    },
    {
      id: 5,
      fullName: 'Tina',
      checkedIn: false,
      checkInDate: null,
      children: null
    },
  
    ]
  
  }

    

}

