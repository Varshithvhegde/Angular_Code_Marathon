import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IRentalHouse } from './house.model';

export class HouseData implements InMemoryDbService {
  createDb() {
    const rentalHouses: IRentalHouse[] = [
      {
        id: 1,

        address: '123 Main Street',

        numberOfRooms: 3,

        monthlyRent: 1200,

        isOccupied: true,
      },

      {
        id: 2,

        address: '456 Elm Avenue',

        numberOfRooms: 4,

        monthlyRent: 1500,

        isOccupied: false,
      },

      {
        id: 3,

        address: '789 Oak Drive',

        numberOfRooms: 2,

        monthlyRent: 900,

        isOccupied: true,
      },

      {
        id: 4,

        address: '101 Pine Road',

        numberOfRooms: 5,

        monthlyRent: 2000,

        isOccupied: false,
      },

      {
        id: 5,

        address: '222 Cedar Lane',

        numberOfRooms: 3,

        monthlyRent: 1100,

        isOccupied: true,
      },

      {
        id: 6,

        address: '333 Maple Court',

        numberOfRooms: 4,

        monthlyRent: 1600,

        isOccupied: true,
      },

      {
        id: 7,

        address: '444 Birch Street',

        numberOfRooms: 2,

        monthlyRent: 950,

        isOccupied: false,
      },

      {
        id: 8,

        address: '555 Willow Avenue',

        numberOfRooms: 3,

        monthlyRent: 1300,

        isOccupied: true,
      },

      {
        id: 9,

        address: '666 Redwood Road',

        numberOfRooms: 4,

        monthlyRent: 1700,

        isOccupied: false,
      },

      {
        id: 10,

        address: '777 Sycamore Lane',

        numberOfRooms: 2,

        monthlyRent: 1000,

        isOccupied: true,
      },
    ]
    return {rentalHouses};
  }
}
