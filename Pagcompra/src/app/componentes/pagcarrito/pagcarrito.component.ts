
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pagcarrito',
  templateUrl: './pagcarrito.component.html',
  styleUrls: ['./pagcarrito.component.css']
})
export class PagcarritoComponent implements OnInit {

  constructor(private router: Router){}

  ngOnInit():void{
    
    

    //localStorage.clear()
  }

  home()
  {
    this.router.navigate(['pagP'])
  }

}
