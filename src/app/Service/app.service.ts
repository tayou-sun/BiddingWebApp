import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Bidding} from '../Model/bidding';


@Injectable()

export class AppService {

    private url = 'http://localhost:54164/api/bidding';

    constructor(private http: HttpClient) {}
    getMessages() {
        return this.http.get(this.url);
    }

    getMessage(id: number) {
        return this.http.get(this.url + '/' + id);
    }

    createBidding(bidding: Bidding) {
        return this.http.post(this.url, bidding);
    }

    saveChanges (biddings: Bidding[]){
        return this.http.put(this.url, biddings);
    }
}
