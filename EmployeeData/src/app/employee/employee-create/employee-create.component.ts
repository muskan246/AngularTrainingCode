import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent {
  enteredId = "";
  enteredName = "";
  enteredSalary = "";
  enteredDept = "";

  @Output() employeeRecorded = new EventEmitter();

  onAddEmployee() {
    const record = {
      id: this.enteredId,
      name: this.enteredName,
      salary: this.enteredName,
      dept: this.enteredDept
    };
    this.employeeRecorded.emit(record);
    // console.log("ppp",record);
  }
  ngOnInit() {

  }
}


