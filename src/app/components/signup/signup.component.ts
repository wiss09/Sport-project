import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup
  path: string = '';
  imagePreview:any

  constructor(
    private inputBuiler: FormBuilder,
    private service: UsersService,
    private router: Router) { }

  ngOnInit(): void {
    this.path = this.router.url
    this.signupForm = this.inputBuiler.group({
      firstName: ['', [Validators.required,   ]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', [Validators.required]],
      img:['']
    })
  }
  signup() {
    
    console.log("this user information", this.signupForm.value)
    if (this.path == '/subscription') {
      this.signupForm.value.role = 'user';
    } else { this.signupForm.value.role = 'admin'; }

    this.service.signup(this.signupForm.value ,this.signupForm.value.img).subscribe((result) => {
      
      console.log(this.signupForm.value)
      alert(result.msg)
    })

  }
 selectFile(event:Event){
  const inputElement = event.target as HTMLInputElement;
  if (inputElement && inputElement.files && inputElement.files.length > 0) {
     const file = inputElement.files[0];
      this.signupForm.patchValue({ img: file });
       this.signupForm.updateValueAndValidity();
        const reader = new FileReader();
         reader.onload = () => { this.imagePreview = reader.result as string; };
          reader.readAsDataURL(file); } 
 }


}
