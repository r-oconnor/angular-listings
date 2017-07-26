import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  formatDate1 = function (date) {
    var datearray = date.split("/");
    var newdate = datearray[1] + '/' + datearray[0] + '/' + datearray[2];
    var dateOut = new Date(newdate);
    return dateOut;
  };
  formatTime1 = function (date, time) {
    var datearray = date.split("/");
    var newdate = datearray[1] + '/' + datearray[0] + '/' + datearray[2] + ' ' + time;
    var dateOut = new Date(newdate);
    return dateOut;
  };
  suffix = function (date) {
    var datearray = date.split("/");
    if (parseInt(datearray[0]) == 1) {
      return "st";
    }
    if (parseInt(datearray[0]) == 2) {
      return "nd";
    }
    if (parseInt(datearray[0]) == 3) {
      return "rd";
    }
    return "th";
  };
  vObject = [
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

}
