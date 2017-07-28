import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }

  public search = function() {
    let vObject = [
      {
        Listing: {
          ID: 123,
          Type: "Exclusive",
          Transaction: "Sale",
          Price: 1000000,
          OpenHouses: [
            {
              Date: "15/10/2020",
              StartTime: "8:00",
              EndTime: "14:00"
            },
            {
              Date: "14/10/2020",
              StartTime: "9:00",
              EndTime: "15:00"
            },
            {
              Date: "15/10/2010",
              StartTime: "8:00",
              EndTime: "14:00"
            }
          ]
        },
        Property: {
          Address: {
            StreetNumber: 660,
            StreetName: "Madison Avenue",
            City: "New York"
          }
        }
      },
      {
        Listing: {
          ID: 124,
          Type: "Open",
          Transaction: "Rent",
          Price: 10000,
          OpenHouses: [
            {
              Date: "15/10/2020",
              StartTime: "8:00",
              EndTime: "14:00"
            },
            {
              Date: "14/10/2020",
              StartTime: "9:00",
              EndTime: "15:00"
            },
            {
              Date: "15/10/2010",
              StartTime: "8:00",
              EndTime: "14:00"
            }
          ]
        },
        Property: {
          Address: {
            StreetNumber: 860,
            StreetName: "Madison Avenue",
            City: "New York"
          }
        }
      }
    ];
    return vObject;
  }
}