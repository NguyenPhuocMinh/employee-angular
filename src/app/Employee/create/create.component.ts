import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
  }

  Create(employee: Employee) {
    this.service.createEmployee(employee)
      .subscribe(data => {
        alert("Created Successfully!");
        this.router.navigate(["list"]);
      })
  }


}

