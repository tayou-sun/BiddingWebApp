import { Component, OnInit } from '@angular/core';
import { AppService } from '../../Service/app.service';
import { Bidding } from '../../Model/bidding';
import { UserService } from '../../Model/auth';
import { Router } from '@angular/router';

@Component({
    templateUrl: './bidding-list.component.html',
    styleUrls: ['./bidding-list.component.css']
})
export class MessageListComponent implements OnInit {

    bidding: Bidding[];
    error: any;
    name: string;

    constructor(private dataService: AppService,
        private userService: UserService,
        private router: Router) {
        this.name = this.userService.getParams().Name;
    }


    ngOnInit() {
        return this.dataService.getMessage(this.userService.getParams().Id)
            .subscribe((data: Bidding[]) => {
                this.bidding = data
            },
                error => {
                    error => { this.router.navigateByUrl("/error") };
                })
    }
}