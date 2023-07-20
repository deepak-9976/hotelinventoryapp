import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { FormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './hover.directive';
import { RoomsModule } from './rooms/rooms.module';
import { RoomsRoutingModule } from './rooms/rooms-routing.module';
import { BookingRoutingModule } from './booking/booking-routing.module';
import { JsonPipe } from '@angular/common';
import { BookingModule } from './booking/booking.module';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ContainerComponent,
    NotfoundComponent,
    AppNavComponent,
    LoginComponent,
    HoverDirective,
    
  ],
  imports: [
    BrowserModule,
    RoomsModule,
    BookingModule,
    BookingRoutingModule,
    RoomsRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

  ],
  providers: [{ provide: JsonPipe }],
  bootstrap: [AppComponent]
})
export class AppModule { }
