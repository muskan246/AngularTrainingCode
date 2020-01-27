import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {
  employees : object;

  constructor() {
    this.employees = [{ ID: 1001, Name: 'Rahul', Salary: 12000, Dept : 'Java'},
    { ID: 1002, Name: 'Vikash', Salary: 12000, Dept : 'OORAPS'},
    { ID: 1003, Name: 'Uma', Salary: 12000, Dept : 'Java'},
    { ID: 1004, Name: 'Sachin', Salary: 12000, Dept : 'OORAPS'},
    { ID: 1005, Name: 'Amol', Salary: 12000, Dept : '.NET'},
    { ID: 1006, Name: 'Vishal', Salary: 12000, Dept : 'BI'},
    { ID: 1007, Name: 'Rajita', Salary: 12000, Dept : 'BI'},
    { ID: 1008, Name: 'Neelima', Salary: 12000, Dept : 'Testing'},
    { ID: 1009, Name: 'Daya', Salary: 12000, Dept : 'Testing'}

  ];
   }

  ngOnInit() {

    console.log(this.employees[0])

  }

}
