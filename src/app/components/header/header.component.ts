import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor( private router : Router) { }
  decodedToken:any
  ngOnInit(): void {
  }
  isLoggedIn(){
    let token: any =sessionStorage.getItem('token');
    if (token) {
      this.decodedToken=jwtDecode(token);
     
    }
     return !!token; // to convert retutn of token to boolean
  
  
    }
  // generateHeader() {
  //  let token: any = sessionStorage.getItem('token');
  //  let tokenDecoded: any = jwtDecode(token);
  //   let statut;
  //   if (token) {
  //     if (tokenDecoded.role == 'admin') {
  //       statut = 'admin'
  //     } else { statut = 'user' }
  //   }

  //   else {
  //     statut = 'not connected'
  //   }
  //   return statut;
  // }
  logout(){
    sessionStorage.removeItem('token');
    this.router.navigate([''])
    
    
    
  }
  // reloadPage(){
  //   window.location.reload()
  // }

}
