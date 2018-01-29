import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClubsService } from './clubs.service';
import { ClubsComponent } from './clubs/clubs.component';

const appRoutes: Routes = [
  {
    path: 'clubs',
    component: ClubsComponent
  },
  {
    path: '',
    component: AppComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ClubsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  providers: [ClubsService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
