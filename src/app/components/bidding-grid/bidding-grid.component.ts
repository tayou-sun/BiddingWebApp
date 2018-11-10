import { Component, OnInit, Input } from '@angular/core';
import { Bidding } from '../../Model/bidding';

@Component({
  selector: 'bidding-grid',
  templateUrl: './bidding-grid.component.html',
  styleUrls: ['./bidding-grid.component.css']
})
export class BiddingGridComponent implements OnInit {


  constructor() { }
    bidding: Bidding[];
    error: any;
    name: string;
    dataAdapter: any;
    changedData: Bidding[];

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
 */        ];

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }
        return 850;
    }

  ngOnInit() {
  }

}
