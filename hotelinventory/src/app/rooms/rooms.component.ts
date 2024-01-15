import { Component, DoCheck, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Room, RoomList } from './rooms';
import { RoomsListComponent } from "./rooms-list/rooms-list.component";
@Component({
  selector: 'hinv-rooms',
  standalone: true,
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterOutlet, AppComponent, RoomsListComponent]
})
export class RoomsComponent implements OnInit, DoCheck {


  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  title = 'Room List';

  roomList: RoomList[] = [];
  constructor() { }

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-fi, TV, Bathroom, Kitchen',
        price: 500,
        photos:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fpt-br%2Fs%2Ffotografias%2Fhotel&psig=AOvVaw3l12Xpr1abTFuShRdPzw_o&ust=1703709523729000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDYs9r6rYMDFQAAAAAdAAAAABAD',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 4.5,
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-fi, TV, Bathroom, Kitchen',
        price: 1000,
        photos:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fpt-br%2Fs%2Ffotografias%2Fhotel&psig=AOvVaw3l12Xpr1abTFuShRdPzw_o&ust=1703709523729000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDYs9r6rYMDFQAAAAAdAAAAABAD',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 3.4,
      },
      {
        roomNumber: 3,
        roomType: 'Private Suite',
        amenities: 'Air Conditioner, Free Wi-fi, TV, Bathroom, Kitchen',
        price: 15000,
        photos:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fpt-br%2Fs%2Ffotografias%2Fhotel&psig=AOvVaw3l12Xpr1abTFuShRdPzw_o&ust=1703709523729000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDYs9r6rYMDFQAAAAAdAAAAABAD',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 2.6,
      },
    ];
  }

  // ngDoCheck(): void {
  //   console.log
  // }
  ngDoCheck(): void {
    console.log('on changes is called');
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fpt-br%2Fs%2Ffotografias%2Fhotel&psig=AOvVaw3l12Xpr1abTFuShRdPzw_o&ust=1703709523729000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDYs9r6rYMDFQAAAAAdAAAAABAD',
      checkinTime: new Date('4-jan-2024'),
      checkoutTime: new Date('5-jan-2024'),
      rating: 4.5,
    };

    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
}
