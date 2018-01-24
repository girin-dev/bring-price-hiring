import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';

export interface Ticket {
    carrier: string;
    destination: string;
    duration: number;
    origin: string;
    price: number;
    stops: object;
}

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css', '../app.reset.css']
})
export class TicketListComponent implements OnInit {
    apiUrl = 'https://api.bringprice.com/api/codingTest';
    _ticketList: any;
    ticketList: any;

    constructor(
        private http: HttpClient
    ) { }

    ngOnInit() {
        this.getTicketList();
    }

    getTicketList() {
        this.http.get<Ticket[]>(this.apiUrl)
            .subscribe(res => {
                this._ticketList = res;
                console.log('getTicketList');
                console.log(this.ticketList);
                this.byPriceAsce();
            });
    }

    byPriceAsce() {
        this.ticketList = this._ticketList.sort((a, b) => {
            return a.price - b.price;
        });
        console.log('오름차순 정렬');
        console.log(this.ticketList);
    }

    byPriceDesc() {
        this.ticketList = this.ticketList.reverse();
        console.log('내림차순 정렬');
        console.log(this.ticketList);
    }

    byCarrier() {
        this.ticketList = this._ticketList.filter(item => {
            return item.carrier !== 'Air China';
        });
        console.log('Air China 제외');
        console.log(this.ticketList);
    }
}
