import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private router : Router) { }
username: string;
password: string;

  ngOnInit() {
  }

  login() : void {
    if(this.username == 'soma' && this.password == 'soma'){
      this.router.navigate(["user"]);
    }else{
      alert("invalide credentials")
    }
  }

}