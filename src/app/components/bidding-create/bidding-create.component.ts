import { Component, ElementRef } from '@angular/core';
import { AppService } from '../../Service/app.service';
import { Bidding } from '../../Model/bidding';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../Model/auth';

@Component({
    templateUrl: './bidding-create.component.html'
})
export class BiddingCreateComponent {

    bidding: Bidding = new Bidding();
    error: any;

    constructor(private dataService: AppService,
        private router: Router,
        private userService: UserService) {
    }

    save() {
        this.bidding.User = this.userService.getParams();
        this.dataService.createBidding(this.bidding)
            .subscribe(() => this.router.navigateByUrl("/biddings"),
                error => { this.router.navigateByUrl("/error") });
    }
}