import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../../Service/app.service';
import { Bidding } from '../../Model/bidding';
import { UserService } from '../../Model/auth';
import { ErrorService } from '../../Service/error.service';
import { Router } from '@angular/router';
import { MessageService } from '../../Service/message.service';
import {Subscription, Subject} from 'rxjs';

@Component({
    templateUrl: './bidding-list.component.html',
    styleUrls: ['./bidding-list.component.css'],
   /*  providers: [Me] */
})
export class MessageListComponent implements OnInit, OnDestroy {
    bidding: Bidding[];
     error: any;
    name: string;
    dataAdapter: any;
    changedData: Bidding[];
    mySubject = new Subject();

    public get isEnable(): boolean {
        return this.changedData.length > 0;
    }
    source: any = {
        datatype: 'array',
        updaterow: (rowid, rowdata, commit) => {
            var result = this.changedData.filter(obj => {
                return obj.Id == rowdata.Id
            });

            if (result.length != 0) {
                result[0].Message = rowdata.Message;
            }
            else {
                let b:Bidding = <Bidding>rowdata;
                var bidding = new Bidding;
                bidding.Id = rowdata.Id;
                bidding.Message = rowdata.Message;
                this.changedData.push(b);
            }

            commit(true);
        },
        datafields: [
            { name: 'Id', type: 'int' },
            { name: 'Message', type: 'string' },
            /*{ name: 'CreatingDate', type: 'date' },
             { name: 'ChangingDate', type: 'date' } */
        ],
    };

    columns: any[] =
        [
            { text: 'Id', datafield: 'Id', width: 250, editable: false },
            { text: 'Message', datafield: 'Message', cellsalign: 'right', align: 'right' },
/*          { text: 'Creating Date', datafield: 'CreatingDate', align: 'right', cellsalign: 'right' },
            { text: 'Changing Date', datafield: 'ChangingDate', align: 'right', cellsalign: 'right' }
        */ ];

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }
        return 850;
    }

/*     constructor(private dataService: AppService,
        private userService: UserService,
        private errorService: ErrorService,
        private router: Router) {

        this.name = this.userService.getParams().Name;
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.changedData = [];
    }
  */

message: any;
subscription: Subscription;

 constructor(private dataService: AppService,
    private userService: UserService,
    private errorService: ErrorService,
    private router: Router,
    private messageService: MessageService) {

  this.name = this.userService.getParams().Name;
    this.dataAdapter = new jqx.dataAdapter(this.source);
    this.changedData = []; 
    //Подписываемся на событие
/*     this.messageService.sendMessage("d");
 */}


    save() {
        return this.dataService.saveChanges(this.changedData)
            .subscribe(() => {
                this.changedData = [];
                this.messageService.getMessage();
            },
            error => {
                this.errorService.SetError(error);
            });
    }
    
    
    ngOnInit() {
        this.subscription = this.messageService.subject.subscribe((x:Bidding[])=>
         {
            this.source.localdata = x;
            this.dataAdapter.dataBind();
        });
        this.messageService.getMessage();
    }

    ngOnDestroy() {
        this.subscription.remove;
    }
}

