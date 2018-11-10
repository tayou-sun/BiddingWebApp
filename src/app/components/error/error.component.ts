import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../../Service/error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  private message: string;
  private messageDetail: string;

  constructor(private errorService: ErrorService) { }

  ngOnInit() {
    this.message = this.errorService.getErrorMessage();
    this.messageDetail = this.errorService.getErrorMessageDetail();
  }
}
