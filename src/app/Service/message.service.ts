/* import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Bidding} from '../Model/bidding';
import {Observable, Subject} from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from './app.service';
import { UserService } from '../Model/auth';
   
@Injectable()
export class HttpService{
    const mySubject = new Subject();
    constructor(private http: HttpClient, 
                private app : AppService,
                private userService: UserService){ }
       
    getBiddings() : Observable<Bidding[]> {
        return this.app.getMessage(this.userService.getParams().Id).pipe(map(data=>{
            return <Bidding[]>data;
        }));
    }
} */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Bidding } from '../Model/bidding';
import { AppService } from './app.service';
import { UserService } from '../Model/auth';
import { ErrorService } from './error.service';

@Injectable()
export class MessageService {
    public subject = new Subject<any>();

    constructor(private app: AppService,
        private user: UserService,
        private errorService : ErrorService) { 
    }

    /* 
       sendMessage(message: Bidding[]) {
           this.subject.next(message);
       } */

    clearMessage(): void {
        this.subject.next();
    }

    // bidding: Bidding[];
    getMessage(){
        this.app.getMessage(this.user.getParams().Id).subscribe((x:Bidding[])=> {
            this.subject.next(x); 
        },
        error => {
            this.errorService.SetError(error);
        });  
    }
}