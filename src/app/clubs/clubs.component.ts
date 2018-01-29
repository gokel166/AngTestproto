import { Component, OnInit } from '@angular/core';
import { ClubsService } from '../clubs.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Club } from '../club';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {

  constructor(private http: HttpClient) { }

 
  ngOnInit() {
    //
  }

}
