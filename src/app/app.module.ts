import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppService } from './Service/app.service';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MessageListComponent } from './components/bidding-list/bidding-list.component';
import { BiddingCreateComponent } from './components/bidding-create/bidding-create.component';
import { BiddingFormComponent } from './components/bidding-form/bidding-form.component';
import { BildingAuthenticationComponent } from './components/bidding-authentication/bidding-authentication.component';
import { AuthGuard } from './Service/auth.guard';
import { UserService } from './Model/auth';
import { AuthService } from './Service/auth.service';
import { ErrorComponent } from './components/error/error.component';
import { CreateAuthorComponent } from './components/create-author/create-author.component';
import { ErrorService } from './Service/error.service';
/* import {jqxGridComponent} from '../../projects/JQW/TS/angular_jqxgrid'
 */
import { JqLibraryModule } from 'jqLibrary';
import { BiddingGridComponent } from './components/bidding-grid/bidding-grid.component';
import { MessageService } from './Service/message.service';

const appRoutes: Routes = [
  {
    path: 'biddings', component:
      MessageListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create',
    component: BiddingCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: BildingAuthenticationComponent
  },
  {
    path: 'create_user',
    component: CreateAuthorComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  declarations: [
    [ AppComponent,
      MessageListComponent,
      BiddingCreateComponent,
      BiddingFormComponent,
      /* BiidingSearchComponent */
      BildingAuthenticationComponent,
      ErrorComponent,
      CreateAuthorComponent,
      /* jqxGridComponent */BiddingGridComponent]
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, JqLibraryModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [AppService, AuthGuard, UserService, AuthService, ErrorService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule { }
