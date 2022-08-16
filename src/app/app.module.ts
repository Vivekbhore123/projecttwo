import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { FormsModule } from '@angular/forms';

//angular material
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';

import { MatInputModule } from '@angular/material/input';
import { SelectValidator } from './shared/directives/directive.validator';
import { SelectAgeValidator } from './shared/directives/directive.ageValidate';
import { SelectPinValidator } from './shared/directives/directive.pinValidate';
import { DatePipeComponent } from './shared/pipes/datepipe.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import {MatDialogModule} from '@angular/material/dialog';
import { SelectDeptValidator } from './shared/directives/directive.deptValidate';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EmplistComponent,
    EmployeeformComponent,
    PageNotFoundComponentComponent,
    SelectValidator,
    SelectAgeValidator,
    SelectPinValidator,
    DatePipeComponent,
    SidenavComponent,
    SelectDeptValidator
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
