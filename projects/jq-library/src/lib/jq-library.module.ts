import { NgModule } from '@angular/core';
import { JqLibraryComponent } from './jq-library.component';
import {jqxGridComponent} from './JQW/TS/angular_jqxgrid';

@NgModule({
  imports: [
  ],
  declarations: [JqLibraryComponent, jqxGridComponent],
  exports: [jqxGridComponent]
})
export class JqLibraryModule { }
