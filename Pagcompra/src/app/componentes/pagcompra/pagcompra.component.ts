import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pagcompra',
  templateUrl: './pagcompra.component.html',
  styleUrls: ['./pagcompra.component.css']
})
export class PagcompraComponent implements OnInit {

  
  constructor(private router: Router){}
  p1: number=0;
  p2: number=0;
  p3: number=0;
  p4: number=0;
  p5: number=0;
  p6: number=0;
  p7: number=0;
  p8: number=0;
  precio1:number=0;
  precio2:number=0;
  precio3:number=0;
  precio4:number=0;
  precio5:number=0;
  precio6:number=0;
  precio7:number=0;
  precio8:number=0;
  total:number=this.p1+this.p2+this.p3+this.p4+this.p5+this.p6+this.p7+this.p8;
  suma:number=0;
   

  ngOnInit():void{
    
    this.p1;
    this.p2;
    this.p3;
    this.p4;
    this.p5;
    this.p6;
    this.p7;
    this.p8;
    this.precio1;
    this.precio2;
    this.precio3;
    this.precio4;
    this.precio5;
    this.precio6;
    this.precio7;
    this.precio8;
    this.total;

    //localStorage.clear()
  }

  recuperar(){
    
    this.suma=this.precio1+this.precio2+this.precio3+this.precio4+this.precio5+this.precio6+this.precio7+this.precio8;
  }

  nav()
  {
    this.router.navigate(['pagC'])
  }
  
}


