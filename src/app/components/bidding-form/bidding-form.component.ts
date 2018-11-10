import { Component, Input } from '@angular/core';
import { Bidding } from '../../Model/bidding';

@Component({
    selector: 'bidding-form',
    templateUrl: './bidding-form.component.html',
    styleUrls: ['./bidding-form.component.css']
})

export class BiddingFormComponent {
    @Input() bidding: Bidding;
}
