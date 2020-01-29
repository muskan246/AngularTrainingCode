import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  submitted = false;
  invalidLogin = false;
  constructor(private formBuilder: FormBuilder) { }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      console.log('Form invalid');
      return;
    }
    if (this.loginForm.controls.email.value === 'muskan@gmail.com' && this.loginForm.controls.password.value === 'Muskan@123') {
      window.alert('Login is successful');
      console.log('login is successful');
    } else {
      this.invalidLogin = true;
      console.log('Invalid details');
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password : ['',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]],

    });
  }

}
