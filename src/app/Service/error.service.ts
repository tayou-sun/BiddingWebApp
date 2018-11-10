import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../Model/auth';


@Injectable()

export class ErrorService {

    private message: string;
    private messageDetail: string;
    private status: number;

    constructor(private router: Router) { }

    SetError(error) {

        this.message = !!error.error.ExceptionMessage
            ? error.error.ExceptionMessage
            : error.error.Message;

        this.messageDetail = error.error.MessageDetail;
        this.status = error.status;
        this.router.navigateByUrl('/error');
    }

    getErrorMessage() {
        return !!this.status ? this.message : 'Server is not available!';
    }

    getErrorMessageDetail() {
        return !!this.messageDetail ? this.messageDetail : '';
    }
}
