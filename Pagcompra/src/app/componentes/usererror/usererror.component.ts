import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usererror',
  templateUrl: './usererror.component.html',
  styleUrls: ['./usererror.component.css']
})
export class UsererrorComponent implements OnInit {

  constructor(private router: Router){}
  ngOnInit():void{
    
    //localStorage.clear()
    
  }

  regresar()
  {
    this.router.navigate(['login'])
  }

  


}
