import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router){}

  contra: any;
  user: any;

  ngOnInit(): void {

    this.contra;
    this.user;
    localStorage.clear()
  }

  
  nave()
  {
    localStorage.setItem('user', this.user);
    localStorage.setItem('contra', this.contra);
    this.router.navigate(['pagP'])
  }

  

}
