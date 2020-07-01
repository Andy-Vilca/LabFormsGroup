import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      lastname2: ['', Validators.required],
      ssn: ['', [Validators.required, Validators.pattern("^(?!0{4})\\d{4}$")]],
      codigopostal: ['', [Validators.required, Validators.pattern("^(?!0{5})\\d{5}$")]],
      fecha_nacimiento: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,20}')]],
      confirmarpassword: ['', Validators.required],
    });
  }

  ngOnInit() {
  }
  onClickSubmit(firstname, lastname,
    lastname2, ssn,
    codigopostal, fecha_nacimiento,
    email, password, confirmarpassword) {
    if (password == confirmarpassword) {
      alert(
        'Your First Name is : ' + firstname + '\n'
        + 'Your First Last Name Name is : ' + lastname + '\n'
        + 'Your Second Last Name is : ' + lastname2 + '\n'
        + 'SSN : ' + ssn + '\n'
        + 'Code Postal : ' + codigopostal + '\n'
        + 'date of birth: ' + fecha_nacimiento + '\n'
        + 'Your Email is : ' + email + '\n'
        + 'Your Password is : ' + password + '\n'
      );
    } else {
      alert('Las contraseñas no coinciden');
    }
  }
}
