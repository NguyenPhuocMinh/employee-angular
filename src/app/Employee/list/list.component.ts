import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import {Employee} from 'src/app/employee';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employees:Employee[] = [];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getEmployees()
    .subscribe(data=>{
      this.employees=data;
    })
  }

}
