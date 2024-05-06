import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {jwtDecode} from 'jwt-decode'
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup
  msgError:string=''
  constructor(
    private inputBuilder: FormBuilder,
     private service: UsersService,
     private router : Router) {

  }

  ngOnInit(): void {
    this.loginForm = this.inputBuilder.group({
      email: [" "],
      password: [" "]
    })
  }
  login() {
    this.service.login(this.loginForm.value).subscribe((data) => {
      alert(data.msg)
     if (data.token) {
      sessionStorage.setItem('token' , data.token)
      this.msgError=''
      let tokenDecoded:any=jwtDecode(data.token)
      console.log(tokenDecoded)
      if (tokenDecoded.role == 'admin') {
        this.router.navigate(['admin'])
      }else{
        this.router.navigate([''])
      }
     }else{
      this.msgError='Please check your Password Or Email'
     }
    })
  }
}
